import { Box, Button, Heading, Skeleton } from "@chakra-ui/react";
import { useState } from "react";
export default function SkeletonExample(){
    const[isSkeleton,setSkeleton]=useState(false)
    return isSkeleton?(<Skeleton height='20px' />):(
        <>
        <Box bg="cyan.300">Heman</Box>
        <Button onClick={()=>setSkeleton(false)}>click me</Button>
        </>
    )
}