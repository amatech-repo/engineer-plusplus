import { useState } from 'react';
import { useRouter } from 'next/router';
import { getFirestore } from "firebase/firestore";
import { DataUsage, Height, MarginRounded } from '@mui/icons-material';
import { Select } from '@mui/material';

export default function Profile() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [favoriteLanguage, setFavoriteLanguage] = useState('');
    const [favoriteTechnology, setFavoriteTechnology] = useState('');
    const [skills, setSkills] = useState('');
    const [comment, setComment] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const textcenter = { textAlign: 'center' };
    const inputStyle = { fontSize: '16px', width: '300px' };
    

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = auth.currentUser;

      if (user) {
        await user.updateProfile({
          displayName: name,
        });

        await firestore.collection('users').doc(user.uid).set({
            name,
            year,
            month,
            day,
            favoriteLanguage,
            favoriteTechnology,
            skills,
            comment,
        });

        router.push('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex' ,alignItems:'center'}}>
            <div style={{  borderRadius: '50%', overflow: 'hidden', marginRight: '16px' }}>
            {/* <Image src="/profile.jpg" alt="プロフィール画像" width={120} height={120}/> */}
            </div>
          
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '30px' }}>
                  サイト名
            </h1>
            <h2 style={{ textAlign: 'left', fontSize: "16px" }}>
                      プロフィール登録画面
            </h2>
            <hr/>
          <div style={{ marginLeft: '250px' ,marginTop:'50px'}}>
            <label>ニックネーム</label>
            <br />
            <input
              style={inputStyle}          
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <br />
          <div style={{ marginLeft: "250px"}}>
                <label>登録日</label>
                <br />
                <span style={{display: 'inline-block'}}>
                    <input
                        style={{ width: '80px',marginRight: '10px' }}
                        type="text"
                        id="year"
                        value={year}
                    />
                    <label htmlFor='year'>年</label> 
                </span>
                <span style={{display:'inline-block'}}>
                    <input
                        style = {{width:'50px',marginRight:'10px'}}
                        type="text"
                        id="month"
                              value={month}
                    />
                    <label htmlFor='month'>月</label>
                </span>
                <span style={{ display: 'inline-block' }}>
                    <input
                        style={{ width: '50px' ,marginRight: '10px'}}
                        type="text"
                        id="day"
                        value={day}
                    />
                    <label htmlFor='month'>日</label>
                </span>
          </div>
          <br />    
          <div style={{textAlign: 'center',marginTop: "50px"}}>
                <label style={{float: "left"}}>自己紹介:</label>
                    <textarea
                        style={{width:'400px'}}
                        rows="5"
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                    />
          </div>
          <br />
          <div style={{textAlign: 'center',marginTop: "20px"}}>
                <label >好きな言語:</label>
                    <select
                        style={inputStyle}
                        type="data"
                        value={favoriteLanguage}
                        onChange={(event) => setFavoriteLanguage(event.target.value)}
                    >
                            <option value="">選択してください</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="React">React</option>
                            <option value="Node.js">Node.js</option>
                            <option value="HTML">HTML</option>
                            <option value="CSS">CSS</option> 
                    </select>
            </div>
            <br />
            <div style={{ textAlign: 'center',marginTop:"30px",marginBottom:'20px'}}>
                <label>好きな技術:</label>
                    <select 
                        style={inputStyle}
                        id="technology"
                        value={favoriteTechnology}
                        onChange={(event) => setFavoriteTechnology(event.target.value)}
                    >
                            <option value="">選択してください</option>
                            <option value="React">React</option>
                            <option value="Vue">Vue</option>
                            <option value="Angular">Angular</option>
                            <option value="Django">Django</option>
                    </select>
            </div>
            <br />
            <div style={{ textAlign: 'center'}}>
                <button type="submit" style={{ display: 'inline-block' }}>保存</button>
            </div>
            </div>
        </div>
    </form>
  );
}
