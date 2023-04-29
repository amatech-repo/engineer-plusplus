// import { useState } from 'react';
// import router, { useRouter } from 'next/router';
// import { getFirestore } from "firebase/firestore";
// import { DataUsage, Height, MarginRounded } from '@mui/icons-material';
// import { Select } from '@mui/material';
// import Tag from '@/components/Tag';
// import Layout from '@/components/Layouts/layout';
// import Thumbnail from '@/components/Thumbnail';
// import Image from 'next/image';

// export default function Profile() {
//     const router = useRouter();
//     const [name, setName] = useState('');
//     const [favoriteLanguage, setFavoriteLanguage] = useState('');
//     const [favoriteTechnology, setFavoriteTechnology] = useState('');
//     const [skills, setSkills] = useState('');
//     const [comment, setComment] = useState(''); 

//         const handleSubmit = async (event) => {
//             event.preventDefault();

//             try {
//                 const user = auth.currentUser;

//                 if (user) {
//                     await user.updateProfile({
//                         displayName: name,
//                     });

//                     await firestore.collection('users').doc(user.uid).set({
//                         name,
//                         favoriteLanguage,
//                         favoriteTechnology,
//                         skills,
//                         comment,
//                     });

//                     router.push('/');
//                 }
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//     return (
//             <Layout>
//             <form onSubmit={handleSubmit}>
//                 <div style={{ margin: "0 20%" }}>
//                     <div style={{
//                          borderRadius: '50%', overflow: 'hidden', marginRight: '16px', backgroundColor: '#'
//                     }}>
//                     </div>
//                     <div>
//                         <h1 style={{ textAlign: 'center', marginTop: '30px' }}>
//                             エンジニア＋＋
//                         </h1>
//                         <h2 style={{ textAlign: 'left', fontSize: "16px" }}>
//                             新規プロフィール登録
//                         </h2>
//                         <hr />
//                         <div>
//                         <div style={{borderRadius: "50%"}}>
//                         <Image src="/my-image.jpeg" alt="my" width={50} height={50}/>
//                         </div>
//                         <div style={{ marginLeft: '300px', marginTop: '100px' }}> {/* ニックネーム記入欄 */}
//                             <label>ニックネーム</label>
//                             <br />
//                             <input
//                                 style={{width: '100%',height: '50px',border: '1px solid #9A9A9A',borderRadius: '5px',padding:'8px',fontSize:'16px'}}
//                                 type="text"
//                                 value={name}
//                                 onChange={(event) => setName(event.target.value)}
//                             />
//                             </div>
//                             </div>
//                         <br />
//                         <div style={{ textAlign: 'center', marginTop: "100px" }}>
//                             <label style={{ float: "left" }}>自己紹介</label>
//                             <textarea
//                                 style={{ width: '100%',height: '75px',border: '1px solid #9A9A9A',borderRadius: '5px',padding:'8px' }}
//                                 value={comment}
//                                 onChange={(event) => setComment(event.target.value)}
//                             />
//                         </div>
//                         <br />
//                         <div style={{ display: 'flex', alignItems: 'center', marginTop: "20px", textAlign:'center'}}>
//                             <label >好きな言語:</label>
//                             <Tag />
//                         </div>
//                         <br />
//                         <div style={{ display: 'flex',textAlign: 'center', marginTop: "30px", marginBottom: '20px' }}>
//                             <label style={{marginRight: '50px'}}>好きな技術:</label>
//                             <Tag />
//                         </div>
//                         <br />
//                         <div style={{ textAlign: 'center' }}>
//                             <button type="submit" style={{ width: '10%',height: '25px',border: '1px solid #9A9A9A',borderRadius: '5px' , marginBottom: '20px'}}>保存</button>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//             </Layout>
//         );
//     }
