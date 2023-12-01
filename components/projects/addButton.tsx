import { useRouter } from 'next/router';
import { SVGAttributes } from 'react';

export function AddingIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="black" fillRule="evenodd" />
      <path clipRule="evenodd" d="M12 8.5C12.2761 8.5 12.5 8.72386 12.5 9V11.5H15C15.2761 11.5 15.5 11.7239 15.5 12C15.5 12.2761 15.2761 12.5 15 12.5H12.5V15C12.5 15.2761 12.2761 15.5 12 15.5C11.7239 15.5 11.5 15.2761 11.5 15V12.5H9C8.72386 12.5 8.5 12.2761 8.5 12C8.5 11.7239 8.72386 11.5 9 11.5H11.5V9C11.5 8.72386 11.7239 8.5 12 8.5Z" fill="black" fillRule="evenodd" />
    </svg>
  );
}

export default function addingButton({ onClickHandler }: { onClickHandler: () => void }) {
  const router = useRouter();

  function handleClick() {
    onClickHandler();
  }

  return (
    <button onClick={handleClick} className="blueButton">
      <AddingIcon className="sm:mr-2" />
      Agregar
    </button>
  );
}

