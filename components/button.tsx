import {useRouter} from 'next/router';
//mport "@/styles/noah_styles.css";

export default function MyButton({ onClickHandler }: { onClickHandler: () => void }) {
  const router = useRouter();

  function handleClick() {
    onClickHandler();
  }

  return (
    <button onClick={handleClick} className="blueButton">
      Hazme clic
    </button>
  );
}
