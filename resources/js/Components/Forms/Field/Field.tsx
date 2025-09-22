import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import styles from "./Field.module.css";

type Props = {
    name: string,
    type: React.HTMLInputTypeAttribute,
    className: string,
};

export default function Field({ name, type, className}: Props) {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    return (
        <main className={styles[className]}>
            <label htmlFor={name}>
                <h6>{name}</h6>
            </label>

            <div className={styles.inputWrapper}>
                <input
                    type={isPassword && showPassword ? "text" : type}
                    id={name}
                    placeholder={name}
                />

                {isPassword && (
                    <button
                        type="button"
                        className={styles.toggleBtn}
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                )}
            </div>
        </main>
    );
}
