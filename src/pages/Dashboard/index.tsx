import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit"> Pesquisar </button>
      </Form>
      <Repositories>
        <a href="a">
          <img
            src="https://avatars1.githubusercontent.com/u/43053055?s=460&u=159d1c86df5d6911c14e8d60d0a9b7f19a675588&v=4"
            alt="Jackson Silva"
          />
          <div>
            <strong>rocketseat/unform/</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms !</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="a">
          <img
            src="https://avatars1.githubusercontent.com/u/43053055?s=460&u=159d1c86df5d6911c14e8d60d0a9b7f19a675588&v=4"
            alt="Jackson Silva"
          />
          <div>
            <strong>rocketseat/unform/</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms !</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="a">
          <img
            src="https://avatars1.githubusercontent.com/u/43053055?s=460&u=159d1c86df5d6911c14e8d60d0a9b7f19a675588&v=4"
            alt="Jackson Silva"
          />
          <div>
            <strong>rocketseat/unform/</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms !</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
