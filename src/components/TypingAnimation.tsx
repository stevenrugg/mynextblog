'use client'

import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
    return (
    <TypeAnimation
    sequence={[
      'I am a software engineer',
      2000,
      'I am a frontend wizard',
      2000,
      'I am a graphic artist',
      2000,
      'I am a UI/UX engineer',
      2000,
      'I am a unicorn',
      2000,
      'I am a geek!',
      2000
    ]}
    wrapper="span"
    speed={50}
    style={{ fontSize: '2em', display: 'inline-block' }}
    repeat={Infinity}
  />   
)
}

export default TypingAnimation;