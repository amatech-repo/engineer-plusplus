import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../../lib/FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useSetRecoilState } from 'recoil';
import { signInUserState } from '@/store/Auth/auth';


// コンテキストを作成
const AuthContext = React.createContext();

export function useAuth() {
    // useContextで作成したコンテキストを呼び出す
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const setSignInUser = useSetRecoilState(signInUserState);

    // 第2引数に[]を指定して、初回レンダリングのみ関数を実行させる
    useEffect(() => {
        // onAuthStateChangedでログインの状態を監視する
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            // ユーザー情報をcurrentUserに格納する
            setCurrentUser(user);
            setLoading(false);

            // ログイン中のユーザー情報をsignInUserStateに保存する
            if (user) {
                setSignInUser({
                    uid: user.uid,
                    accessToken: user.accessToken,
                });
            } else {
                // ログアウトしている場合はsignInUserStateを初期化する
                setSignInUser({
                    uid: null,
                    accessToken: null,
                });
            }
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
    };

    // _app.jsで全コンポーネントをラッピングするためのプロバイダー
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
