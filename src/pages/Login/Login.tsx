import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.centering}>
      <form>
        <h3>Вход</h3>
       <div>
          <input type="text" placeholder="Имя пользователя"/>
          <input type="text" placeholder="Пароль"/>
          <button type="submit">Отправить</button>
       </div>
      </form>
    </div>
  )
}

export default Login