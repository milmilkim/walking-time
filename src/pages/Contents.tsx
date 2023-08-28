import useChapter from '@/hooks/useChapter';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PAGE, APP } from '../../config';
import { route } from '@/@types/route';
import { useState } from 'react';

const Contents = () => {
  const { id } = useParams();
  const chapter = useChapter();
  const navigate = useNavigate();

  const [html, setHtml] = useState<string>('');

  const init = async () => {
    try {
      if (!id) throw new Error('id가 존재하지 않습니다');

      const base = import.meta.env.DEV ? '/' : `/${APP.GITHUB_REPO_NAME}`;

      const idNumber = id.replace(PAGE.PREFIX, '');

      const res = await fetch(`${base}/files/${idNumber}.html`);

      if (!res.ok) {
        throw new Error('파일을 불러오지 못했습니다');
      }

      const text = await res.text();
      const html = text.replace(/\/images\//g, `${base}/files/images/`);

      setHtml(html);
    } catch (err) {
      console.log(err);
      chapter.goSpecificChapter(1);
    }
  };

  const next = () => {
    chapter.goNextChapter();
  };

  const goCredit = () => {
    navigate(route.Credit);
  };

  function createMarkup() {
    return { __html: html };
  }

  useEffect(() => {
    init();
  }, [id]);

  return (
    <>
      <h1>container</h1>
      <div dangerouslySetInnerHTML={createMarkup()}></div>
      {Number(id?.replace(PAGE.PREFIX, '')) < PAGE.CAHPTER_COUNT ? (
        <button onClick={next}>다음으로</button>
      ) : (
        <button onClick={goCredit}>credit</button>
      )}
    </>
  );
};

export default Contents;
