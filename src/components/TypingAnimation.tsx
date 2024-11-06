'use client'

import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
    return (
   
    <TypeAnimation
    sequence={[
      "I'm a software engineer",
      2000,
      "I'm a frontend wizard",
      2000,
      "I'm a graphic artist",
      2000,
      "I'm a UI/UX engineer",
      2000,
      "I'm a unicorn",
      2000,
      "I'm a geek!",
      2000
    ]}
    wrapper="p"
    speed={50}
    style={{ fontSize: '2em', display: 'inline-block', lineHeight: '1.025' }}
    repeat={Infinity}
    
  />  
)
}

export default TypingAnimation;