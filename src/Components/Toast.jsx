import { useToast ,Box} from '@chakra-ui/react'
import { useSelector } from 'react-redux'

export function Toast() {

  const auth=useSelector((store)=>{
    return store.authReducer.isAuth

  })
  console.log(auth)
    const toast = useToast()
    console.log(toast)

   
    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  
      
    }

  