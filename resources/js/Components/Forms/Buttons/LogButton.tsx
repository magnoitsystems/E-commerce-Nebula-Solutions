import styles from './Buttons.module.css';

type Props = {
    name: string,
    onClick?: () => void,
    className: string,
}

export default function LogButton({ name, onClick, className } : Props) {
    return (
        <button className={styles[className]} onClick={onClick}>
            <h5 className={styles.title}>{name}</h5>
        </button>
    )
}