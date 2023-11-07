import React, { useState, useEffect } from 'react';
// Chakra imports
import {
    Flex,
} from "@chakra-ui/react";
import { useForm, Controller, FormProvider, useFormContext } from 'react-hook-form'
import { useSession } from "next-auth/react"

import Documents from '@components/profile//profileInfo/documents';
import UploadDocument from '@components/profile/profileInfo/uploadDocument'


function Documentations({pdfList}) {
    const [files, setFiles] = useState([]);
    console.log(files);
    const methods = useForm();

    var { data: session, status } = useSession()

    return (
        <>
            <Flex direction='column'  >
                <Documents pdfList={pdfList}/>
                <UploadDocument/>
            </Flex>


        </>
    );
}

export default Documentations;
