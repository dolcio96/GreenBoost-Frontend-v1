import { extendTheme, transition } from '@chakra-ui/react';
import { fontSize } from '@mui/system';
import { inputTheme } from './theme/input.js'

export const myTheme = extendTheme({
    colors: {
        primary: "#588157",
        secondary: "#A3B18A",
        tertiary: "#DAD7CD",
        quaternary: "#344E41",
        danger: "#EF6F6C",
        warning: "#F2C57C"
    },



    components: {
        Modal: {
            baseStyle: (props) => ({
                dialog: {

                }
            })
        },
        Input: {
           //baseStyle: {
            //    field: {
                    //bg: "red",
                    //color: 'white', // change the input text color
            //    },
           // },
        },

        Button: {
            baseStyle: {},
            variants: {
                'normalButton': {
                    color: "white",
                    bg: "primary",
                    _hover: { bg: "secondary" },

                },
                'dangerButton': {

                }
            }
        },
        Radio: {
            baseStyle: {
                size: "xl",

            },
            variants: {
                'normalRadio': {
                    size: "xl",
                    bg: "red"
                }
            }
        },


    }
})