import styles from '../BuySection.module.css';

type Props = {
    text: string,
    className: string,
    onClick?: () => void,
}

export default function BuyButton({ text, className, onClick }: Props) {
    return (
        <button className={styles[className]} onClick={onClick}>
            <h3>{text}</h3>
        </button>
    )
}
