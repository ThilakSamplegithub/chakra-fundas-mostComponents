import { SimpleGrid,Box } from '@chakra-ui/react'
export default function SimpleGridExample(){
    return(
        <>
        {/* <SimpleGrid columns={[1,2,3,4,5,6]} spacing={10} textAlign='center' fontSize="4xl"> */}
        <SimpleGrid  columns={{base:1,sm:2,md:3,lg:4,xl:5,"2xl":6}} spacing={10} textAlign='center' fontSize="4xl">
  <Box bg='tomato' height='80px' >1</Box>
  <Box bg='tomato' height='80px'>2</Box>
  <Box bg='tomato' height='80px'>3</Box>
  <Box bg='tomato' height='80px'>4</Box>
  <Box bg='tomato' height='80px'>5</Box>
  <Box bg='tomato' height='80px'>6</Box>
  <Box bg='tomato' height='80px'>7</Box>
  <Box bg='tomato' height='80px'>8</Box>
  <Box bg='tomato' height='80px'>9</Box>
  <Box bg='tomato' height='80px'>10</Box>
</SimpleGrid>
        </>
    )
}