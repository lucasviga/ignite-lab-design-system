import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({children}: TextInputRootProps) {
  return (
    <div className='flex items-center gap-3 h-12 py-4 px-4 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
      {children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root"

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({children}: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {children}
    </Slot>
  )
}

TextInputIcon.displayName = "TextInput.Icon"

export interface TextInputCProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputC(props: TextInputCProps) {
  return (  
    <input className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
    />            
  )
} 

TextInputC.displayName = "TextInput.C"

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputC,
  Icon: TextInputIcon,
}