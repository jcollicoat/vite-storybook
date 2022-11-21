import './button.css'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  console.log('Build:')
  console.log('Expect: true | ', import.meta.env.STORYBOOK)
  console.log('Expect: StorybookSBMainDefine | ', import.meta.env.STORYBOOK_SBMAIN_DEFINE)
  console.log('Expect: ViteSBMainDefine | ', import.meta.env.VITE_SBMAIN_DEFINE)
  console.log('Expect: OtherSBMainDefine | ', import.meta.env.OTHER_SBMAIN_DEFINE)
  console.log('Expect: StorybookViteConfigDefine | ', import.meta.env.STORYBOOK_VITECONFIG_DEFINE)
  console.log('Expect: ViteViteConfigDefine | ', import.meta.env.VITE_VITECONFIG_DEFINE)
  console.log('Expect: OtherViteConfigDefine | ', import.meta.env.OTHER_VITECONFIG_DEFINE)

  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
  return (
    <button
      type='button'
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}
