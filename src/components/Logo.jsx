import logo from '../assets/logo.svg';

export function Logo({ width, height, style, ...props }) {
  return (
    <img
      src={logo}
      alt="HappyCo Logo"
      style={{
        width: width || 'auto',
        height: height || 'auto',
        display: 'block',
        ...style,
      }}
      {...props}
    />
  );
}
