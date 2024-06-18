import './index.less';

interface IProps {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({ children, onClick, disabled }: IProps) {
  return (
    <button className="szui-button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
