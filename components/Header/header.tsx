import style from './header.module.css';

export default () => {
  return (
    <div className={style.container}>
      <h1>Handcrafted, home-made masterpieces</h1>
      <form action='login' method='get' className={style.container}>
        <input type='email' name='' id='' placeholder='Enter your email address' />
        <button type='submit'>GET STARTED</button>
      </form>
    </div>
  );
};
