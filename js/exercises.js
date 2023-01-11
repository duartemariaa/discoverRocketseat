
//let score = 88

function getScore(score){
    if(score >= 90){
        console.log("A")
    }else if(score >= 80 && score <=89){
        console.log("B")
    }else if(score >= 70 && score <=79){
        console.log("C")
    }else if(score >= 60 && score <=69){
        console.log("D")
    }else if(score < 60 && score >= 0){
        console.log("F")
    }else{
        console.log("invalid score")
    }
}
getScore(7)

//////////////////////////////////////////////////////////

let family = {
    incomes: [5000, 3500.78, 235.90, 360.45],
    expenses: [2000.89, 199.90, 2500, 300.99]
}

function sum(array){
    let total = 0;

    for(let value of array){
        total += value
    }
    
    return total
}

function calculateBalance(){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negative"

    if(itsOk){
        balanceText = "positive"
    }

    console.log(`Your balance is ${balanceText}: R$ ${total.toFixed(2)}`)
}

calculateBalance()

//////////////////////////////////////////////////////////

function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists){
        throw new Error('unidentified degree')
    }

    //ideal flow, F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    //alternate flow C -> F
    if(celsiusExists){
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updateDegree) + degreeSign
  
}

try {
    console.log(transformDegree('10C'))
    //transformDegree('50Z') //erro
}catch (error){
    console.log(error) //.message
}

//////////////////////////////////////////////////////////

const booksByCategory = [
    {
        category: "riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

//total de categorias
const totalCategories = booksByCategory.length
console.log(totalCategories);

for(let category of booksByCategory){
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors = [];
    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }
    console.log("Total de autores: ", authors.length)
}
countAuthors();

function booksOfAuthor(author){
    let books = [];
    for(let category of booksByCategory){
        for(let book of category.books){
           if(book.author == author){
               books.push(book.title)
           }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}
booksOfAuthor('Augusto Cury');