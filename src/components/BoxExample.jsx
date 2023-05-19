import { Box } from '@chakra-ui/react'
export default function BoxExample(){
    return(
        <>
        <Box bg='teal' w='100%' p={9} color='white'>
            {/* p meanss padding && box is like div which is used generally which internally operates like div only */}
        This is the Box
        </Box>
        </>
    )
}
