import { extendTheme, transition } from '@chakra-ui/react';
import { fontSize } from '@mui/system';
import { inputTheme } from './theme/input.js'

export const myTheme = extendTheme({
    colors: {
        primary: "#588157",
        secondary: "#A3B18A",
        tertiary: "#EBF0EA",
        quaternary: "#344E41",
        danger: "#EF6F6C",
        warning: "#F2C57C"
    },

    fonts: {
        body: "SF Pro Display, sans-serif",
        heading: "SF Pro Display, sans-serif",
        text:"SF Pro Display, serif",
        mono: "Menlo, monospace",
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
            baseStyle: {
                
            },
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
                control:{  
                }

            },
            variants: {
                'normalRadio': {
                    control:{
                        _checked:{ borderColor: "primary", borderStyle: "solid", borderWidth: "2px", bg:"primary", _hover:{bg:"secondary",borderColor: "secondary"}}
                    },
                }
            }
        },
        Checkbox: {
            baseStyle: {
                control: {
                    _checked: {
                        bg: "primary",
                        border: "none",
                        _hover: {
                            bg: "primary"
                        },
                    },

                },
            },
            variants: {
                'test': {
                    control: {
                        bg: "gray",
                        _checked: {
                            bg: "red"
                        }
                    }
                }
            }
        }

    }
})
