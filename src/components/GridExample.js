import { Grid, GridItem,Box } from '@chakra-ui/react'
export default function GridExample(){
    return(
        <>
       <Grid
  h='400px'
//   templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem rowSpan={2} bg='tomato' />
  <GridItem  bg='papayawhip' />
  <GridItem  bg='papayawhip' />
  <GridItem colSpan={2} bg='tomato' />
  <GridItem colSpan={4} bg='teal' />
</Grid>
 {/* <Grid templateColumns='repeat(5, 1fr)' gap={10} colums={[1,2,3]}>
    <Box bg="green.400">1</Box>
    <Box bg="green.300">1</Box>
    <Box bg="cyan.200">1</Box>
    <Box bg="orange.400">1</Box> */}
  {/* <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' /> */}
{/* </Grid> */}
        </>
    )
}