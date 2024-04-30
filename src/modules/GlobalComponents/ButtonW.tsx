import { Button } from 'reactstrap';
import { AiFillForward } from "react-icons/ai";
const IButtonComponent = ({
  actionOnClick,
  label,
  type,
  className = '',
  btnIcon = <AiFillForward/>,
  disabled = false,
  classNameContend = "flex justify-center items-center p-5 rounded-xl bg-primaryWellTalkUni mt-auto transition",
  classNameContainer = "flex"
}: any) => {
  return (
    <div className={classNameContainer}>
      <Button
        disabled={disabled}
        type={type}
        onClick={() => actionOnClick()}
        className={className}
      >
        <div className={`${classNameContend} ${disabled ? " cursor-no-drop": " cursor-pointer hover:bg-orange-300"}`}>
            {btnIcon}
            {label}
        </div>
      </Button>
    </div>
  );
};

export default IButtonComponent;