import {useRouter} from 'next/router';
//mport "@/styles/noah_styles.css";

export default function MyButton({ onClickHandler }: { onClickHandler: () => void }) {
  const router = useRouter();

  function handleClick() {
    onClickHandler();
  }

  return (
    <button onClick={handleClick} className="blueButton">
        <h1 className="text-1xl mb-5 font-bold text-white" style={{
        color: '#FFF',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '16px',
        letterSpacing: '0.5px',
      }}>Ver</h1>
    </button>
  );
}
