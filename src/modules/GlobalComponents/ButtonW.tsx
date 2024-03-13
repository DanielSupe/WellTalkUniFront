import { Button } from 'reactstrap';
import { AiFillForward } from "react-icons/ai";
const IButtonComponent = ({
  actionOnClick,
  label,
  type,
  className = '',
  btnIcon = <AiFillForward/>,
  disabled = false,
}: any) => {
  return (
    <div className='flex'>
      <Button
        disabled={disabled}
        type={type}
        onClick={() => actionOnClick()}
        className={className}
      >
        <div className={`flex justify-center items-center p-5 rounded-xl bg-primaryWellTalkUni mt-auto transition ${disabled ? " cursor-no-drop": " cursor-pointer hover:bg-orange-300"}`}>
            {btnIcon}
            {label}
        </div>
      </Button>
    </div>
  );
};

export default IButtonComponent;