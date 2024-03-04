let balance1 = 1200;

const password1 = 1234;

let usersInfo = [
  ['Merab', 'Dvalishvili', balance1, password1],
];



const askForEntry = () => confirm('პირად ანგარიშზე შესასვლელად დააჭირეთ "ОК"\n ან გააუქმეთ ღილაკით "CANCEL"');
console.log('თუ გნებავთ პირად ანგარიშზე შესვლა დააჭირეთ "ОК"\n ან გააუქმეთ ღილაკით "CANCEL"') ;
const login = () => {
  return askForEntry()
    ?  checkUserName()
    : alert('თქვენ შეწყვიტეთ შესვლის პროცესი') && console.log('თქვენ შეწყვიტეთ შესვლის პროცესი');
};

function checkUserName() {
  console.log('IT BANK\nგვერდზე შემოსვლისთვის შეიყვანეთ თქვენი სახელი:');
  let userInputName = prompt('IT BANK\nგვერდზე შემოსვლისთვის შეიყვანეთ თქვენი სახელი:');
  let userIndex = -1;
  if (userInputName === null) {
    login();
    return;
  }
  if (userInputName === "") {
    console.log("სახელი არასწორია, სცადეთ ხელახლა");
    alert("სახელი არასწორია, სცადეთ ხელახლა");
    checkUserName();
    return;
}
  if (!/^[a-zA-Z]+$/.test(userInputName)) {
    console.log('შეყვანილი სახელი უნდა მოიცავდეს ლათინურ ასოებს');
    alert('შეყვანილი სახელი უნდა მოიცავდეს ლათინურ ასოებს');
    checkUserName();
    return;
  } else{   
      for (let i = 0; i < usersInfo.length; i++) {
        if (userInputName === usersInfo[i][0]) {
          userIndex = i;
          console.log(`მოგესალმებით  ${userInputName}`);
          checkPassword(userIndex);
          return;
          }
        else{
          console.log(`მომხმარებელი ${userInputName} სახელით არ არსებობს.\n სცადეთ ხელახლა`);
          alert(`მომხმარებელი ${userInputName} სახელით არ არსებობს.\n სცადეთ ხელახლა`);
          checkUserName();
        }
      }
    }
}

function checkPassword(userIndex) {
  let tryInputPassword = 3;
  while (tryInputPassword > 0) {
    console.log(`შეიყვანეთ პინ კოდი.\nდარჩენილი მცდელობების რაოდენობა: ${tryInputPassword}`);
    let userInputPassword = prompt(`შეიყვანეთ პინ კოდი.\nდარჩენილი მცდელობების რაოდენობა: ${tryInputPassword}`);
    if (userInputPassword === null) {
      console.log('ოპერაცია გაუქმებულია');
      alert('ოპერაცია გაუქმებულია');
      login();
      return;
    }
    if (userInputPassword === '') {
      tryInputPassword--;
      console.log('გთხოვთ შეიყვანეთ პაროლი მითითებულ ველში');
      alert('გთხოვთ შეიყვანეთ პაროლი მითითებულ ველში');
    } else if (!/^\d+$/.test(userInputPassword)) {
      tryInputPassword--;
      alert('პინ კოდი უნდა შეიცავდეს მხოლოდ ციფრებს.');
    } 
    else {
      if (parseInt(userInputPassword) !== usersInfo[userIndex][3]) {
        tryInputPassword--;
        console.log(`პინ კოდი არასწორია. დარჩენილი მცდელობების რაოდენობა: ${tryInputPassword}`);
        alert(`პინ კოდი არასწორია. დარჩენილი მცდელობების რაოდენობა: ${tryInputPassword}`);
        return;
      } else {
        console.log('პინ კოდი სწორია.');
        menu(userIndex);
        return;
      }
    }
     if (tryInputPassword === 0) {
      console.log(`ანგარიში დაბლოკილია უსაფრთხოების მიზნით\n დარჩენილი მცდელობების რაოდენობა: ${tryInputPassword}`);
      alert(`ანგარიში დაბლოკილია უსაფრთხოების მიზნით\n დარჩენილი მცდელობების რაოდენობა: ${tryInputPassword}`);
      login();
      return;
    }
  }
}

function menu(userIndex) {
  while (true) {
    console.log('შეიყვანეთ საჭირო ოპერაციის შესაბამისი რიცხვი:\n1. ბალანსის შემოწმება\n2. თანხის განაღდება\n3. თანხის შეტანა\n4. გამოსვლა')
    let choice = prompt('შეიყვანეთ საჭირო ოპერაციის შესაბამისი რიცხვი:\n1. ბალანსის შემოწმება\n2. თანხის განაღდება\n3. თანხის შეტანა\n4. გამოსვლა');
    switch (choice) {
      case '1':
        checkBalance(userIndex);
        menu(userIndex);
        break;
      case '2':
        withdrawMoney(userIndex);
        menu(userIndex);
        break;
      case '3':
        depositMoney(userIndex);
        menu(userIndex);
        break;
      case '4':
        console.log(`${usersInfo[userIndex][0]} გვერდიდან გასვლა`);
        alert(`${usersInfo[userIndex][0]} გვერდიდან გასვლა`);
        checkUserName();
        return;
        case '':
        console.log(`${usersInfo[userIndex][0]} გთხოვთ აირჩიოთ ოპერაცია`);
        alert(`${usersInfo[userIndex][0]} გთხოვთ აირჩიოთ ოპერაცია`);
        menu(userIndex);
        return;
        case null:
        console.log(`${usersInfo[userIndex][0]} გვერდიდან გამოსასვლელად აირჩიეთ ოპერაცია 4`);
        alert(`${usersInfo[userIndex][0]} გვერდიდან გამოსასვლელად აირჩიეთ ოპერაცია 4`);
        menu(userIndex);
        return;
      default:
        console.log(`${usersInfo[userIndex][0]} თქვენს მიერ არჩეული ოპერაცია ვერ შესრულდა, სცადეთ ხელახლა`);
        alert(`${usersInfo[userIndex][0]} თქვენს მიერ არჩეული ოპერაცია ვერ შესრულდა, სცადეთ ხელახლა`);
    }
  }
}

function checkBalance(userIndex) {
    let balance = usersInfo[userIndex][2];
    console.log(`${usersInfo[userIndex][0]} ${usersInfo[userIndex][1]} თქვენს ბალანსზე არის: ${balance} ლარი`);
    alert(`${usersInfo[userIndex][0]} ${usersInfo[userIndex][1]} თქვენს ბალანსზე არის: ${balance} ლარი`);
  }

function withdrawMoney(userIndex) {
  let amountInput = prompt('შეიყვანეთ თანხა, რომელიც გსურთ რომ გაანაღდოთ');
  if (amountInput === null) {
      console.log("თქვენ შეწყვიტეთ ოპერაცია, გაიმეორეთ.");
      alert("თქვენ შეწყვიტეთ ოპერაცია, გაიმეორეთ.");
      menu(userIndex);
      return;
  } else if (amountInput === "") {
      console.log("გთხოვთ შეივანოთ თანხა.");
      alert("გთხოვთ შეივანოთ თანხა.");
      withdrawMoney(userIndex);
      return;
  }
  let amount = parseFloat(amountInput);
  if (isNaN(amount) || amount <= 0) {
      console.log('თქვენ შეიყვანეთ არაკორექტული თანხა, გაიმეორეთ');
      alert('თქვენ შეიყვანეთ არაკორექტული თანხა, გაიმეორეთ');
      withdrawMoney(userIndex);
      return;
  }
  if (!/^\d+$/.test(amountInput)) {
      console.log('შემოყვანილი თანხა უნდა შეიცავდეს მხოლოდ ციფრებს.');
      alert('შემოყვანილი თანხა უნდა შეიცავდეს მხოლოდ ციფრებს.');
      withdrawMoney(userIndex);
      return;
  }
  if (amount < 1) {
      console.log('გთხოვთ შეიყვანოთ მინიმუმ 1 ლარი');
      alert('გთხოვთ შეიყვანოთ მინიმუმ 1 ლარი');
      withdrawMoney(userIndex);
      return;
  }
  if (!/^\d+$/.test(amountInput) || amount !== parseFloat(amountInput)) {
      console.log('შემოყვანილი თანხა უნდა შეიცავდეს კორექტული ციფრები, გაიმეორეთ');
      alert('შემოყვანილი თანხა უნდა შეიცავდეს კორექტული ციფრები, გაიმეორეთ');
      withdrawMoney(userIndex);
      return;
  } 
  if (!Number.isInteger(amount) || amount <= 0) {
    console.log('თქვენ შეიყვანეთ არაკორექტული თანხა, გაიმეორეთ');
    alert('თქვენ შეიყვანეთ არაკორექტული თანხა, გაიმეორეთ');
    withdrawMoney(userIndex)
    return;
  }
  if (amount > 50000) {
      console.log('დღიური ლიმიტი არის 50,000 ლარი \n დარჩენილი თანხა გაანაღდეთ 24 საათში');
      alert('დღიური ლიმიტი არის 50,000 ლარი \n დარჩენილი თანხა გაანაღდეთ 24 საათში');
      withdrawMoney(userIndex);
      return;
  } else if (amount > usersInfo[userIndex][2]) {
      console.log('არასაკმარისი თანხა,\n შეამოწმეთ ბალანსი.');
      alert('არასაკმარისი თანხა,\n შეამოწმეთ ბალანსი.');
      withdrawMoney(userIndex);
      return;
  } else {
      usersInfo[userIndex][2] -= amount;
      console.log(`${usersInfo[userIndex][0]} ${usersInfo[userIndex][1]} თანხის განაღდება: ${amount} ლარი\n ბალანსზე არსებული თანხა:: ${usersInfo[userIndex][2]} ლარი`);
      alert(`${usersInfo[userIndex][0]} ${usersInfo[userIndex][1]} თანხის განაღდება: ${amount} ლარი\n ბალანსზე არსებული თანხა: ${usersInfo[userIndex][2]} ლარი`);
      menu(userIndex);
      return;
  }
}

  function depositMoney(userIndex) {
    console.log('გთხოვთ შეიყვანოთ შესატანი თანხის ოდენობა');
    let amountInput = prompt('გთხოვთ შეიყვანოთ შესატანი თანხის ოდენობა');
  
    if (amountInput === null) {
        console.log("თქვენ შეწყვიტეთ ოპერაცია, გაიმეორეთ.");
        alert("თქვენ შეწყვიტეთ ოპერაცია, გაიმეორეთ.");
        menu(userIndex);
        return;
    }
    if (amountInput === "") {
        console.log("გთხოვთ, შეიყვანოთ თანხა სწორად.");
        alert("გთხოვთ, შეიყვანოთ თანხა სწორად.");
        depositMoney(userIndex);
        return;
    }

    let amount = parseFloat(amountInput);

    if (isNaN(amount) || amount <= 0) {
        console.log('გთხოვთ, შეიყვანოთ თანხა სწორად.');
        alert('გთხოვთ, შეიყვანოთ თანხა სწორად.');
        depositMoney(userIndex);
        return;
    }

    if (!/^\d+$/.test(amountInput)) {
        console.log('შეყვანილი თანხა უნდა შეიცავდეს მხოლოდ ციფრებს');
        alert('შეყვანილი თანხა უნდა შეიცავდეს მხოლოდ ციფრებს');
        depositMoney(userIndex);
        return;
    }

    if (!isFinite(amount) || amount !== parseFloat(amountInput)) {
        console.logt('შეყვანილი თანხა უნდა შეიცავდეს სწორ რიცხვს');
        alert('შეყვანილი თანხა უნდა შეიცავდეს სწორ რიცხვს');
        depositMoney(userIndex);
        return;
    }
    if (!Number.isInteger(amount) || amount <= 0) {
      console.log('თქვენ შეიყვანეთ არაზუსტი თანხა, სცადეთ ხელახლა');
      alert('თქვენ შეიყვანეთ არაზუსტი თანხა, სცადეთ ხელახლა');
      depositMoney(userIndex);
      return;
    }
    if (amount > 50000) {
        alert('დღიური ლიმიტი არის 50,000 ლარი\n დარჩენილი თანხა შეიტანოთ მომდევნო დღეს.');
        depositMoney(userIndex);
        return;
    }
    usersInfo[userIndex][2] += amount;
    console.log(`${usersInfo[userIndex][0]} ${usersInfo[userIndex][1]} ჩარიცხვა: ${amount} ლარი,\n ბალანსი: ${usersInfo[userIndex][2]} ლარი`);
    alert(`${usersInfo[userIndex][0]} ${usersInfo[userIndex][1]} ჩარიცხვა: ${amount} ლარი\n ბალანსი: ${usersInfo[userIndex][2]} ლარი`);
    menu(userIndex);
}

login();