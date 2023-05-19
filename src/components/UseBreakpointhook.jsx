import { useBreakpointValue,Text,Button,VStack,Box } from '@chakra-ui/react'
export default function UseBreakpointhook(){
const variant = useBreakpointValue(
    {
      base: "its base",
      sm:"its small screen",
      md: 'medium screen',
      lg:"its large screen",
      xl:"its extra large screen",
      "2xl":"its very very large scrren"
    },
    {
      // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
      // (Defaults to 'base')
      fallback: 'md',
    },
  )
  return(
    <>
    <VStack align='flex-start'>
      <Box >{variant}</Box>
      <Button colorScheme='teal'>
        Button
      </Button>
    </VStack>
        </>
    )
}