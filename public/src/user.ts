//types モジュールのuser　モジュールを読み込み
import { User } from './types';

//型推論で定義
var user: User = {
    id: 1,
    name: {
        first: "Battumur",
        last: "Ariunzaya",
    },
    email: "zzzaya98@gmail.com",
    isActive: true,
}
//user.name.first = 1;
console.log(user);

//型を明示的に定義
// var user: {
//     id: number;
//     email: string;
//     isActive: boolean;
// } = {
//     id: 1,
//     email: "test@test.com",
//     isActive: true,
// }
// user.id = "32";
