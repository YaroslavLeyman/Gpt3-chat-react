import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Давай создадим что-то удивительное с GPT-3 OpenAI</h1>
      <p>Нажми начать диалог и спроси GPT о чем угодно.</p>

      <div className="gpt3__header-content__input">
        <button type="button">Начать диалог</button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
