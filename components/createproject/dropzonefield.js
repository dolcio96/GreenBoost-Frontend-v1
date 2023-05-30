import {
    Center,
    useColorModeValue,
    Icon,
} from '@chakra-ui/react';
import React from 'react';
import { useDropzone } from 'react-dropzone'
import { Controller, useFormContext } from "react-hook-form";
import { AiFillFileAdd } from 'react-icons/ai';



const DropzoneField = ({
    ...rest
}) => {
    const { control, register } = useFormContext()

    return (
        <Controller
            name="dropzoneController"
            render={({ onChange }) => (
                <Dropzone
                    multiple={false}
                    name={"dropZone"}
                    control={control}
                    defaultValue=""
                    onChange={e =>
                        onChange(multiple ? e.target.files : e.target.files[0])
                    }
                    {...rest}
                />
            )}

        />
    )
}

const Dropzone = ({
    multiple,
    onChange,
    ...rest
}) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: '.pdf',
        maxFiles: 1,
        multiple: false,
        onDrop: acceptedFiles => {
            rest.setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }))
            );
        }
    })



    const activeBg = useColorModeValue('gray.100', 'gray.600');
    const borderColor = useColorModeValue(
        isDragActive ? 'teal.300' : 'gray.300',
        isDragActive ? 'teal.500' : 'gray.500',
    );
    const dropText = isDragActive ? 'Drop the files here ...' : 'Drag \'n\' drop .file here, or click to select files';

    return (
        <>

            <Center
                p={10}
                cursor="pointer"
                bg={isDragActive ? activeBg : 'transparent'}
                _hover={{ bg: activeBg }}
                transition="background-color 0.2s ease"
                borderRadius={4}
                border="3px dashed"
                borderColor={borderColor}
                {...getRootProps()}
            >
                <input {...getInputProps({ onChange })} {...register("pdf")} />
                <Icon as={AiFillFileAdd} mr={2} />
                <p>{dropText}</p>
            </Center>
        </>

    )
}

export default DropzoneField