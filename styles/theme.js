import {extendTheme} from '@chakra-ui/react';

export const myTheme = extendTheme({
    colors:{
        primary:"#588157",
        secondary:"#A3B18A",
        tertiary:"#DAD7CD",
        quaternary:"#344E41",
        danger:"#EF6F6C",
        warning:"#F2C57C"
    },



    components: {
        Modal: {
          baseStyle: (props) => ({
            dialog: {
              
            }
          })
        }
      }
})