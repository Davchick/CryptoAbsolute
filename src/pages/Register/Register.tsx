import styles from "./Register.module.scss";

const Register = () => {
  return (
    <div className={styles.centering}>
      <form>
        <h3>Регистрация</h3>
       <div className={styles.container}>
          <input type="text" placeholder="Имя пользователя"/>
          <input type="password" placeholder="Пароль"/>
          <input type="text" placeholder="Код доступа"/>
       </div>
        <button type="submit">Готово</button>
      </form>
    </div>
  )
}

export default Register