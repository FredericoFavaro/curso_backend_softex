/*
Crie uma lista encadeada em que cada elemento representa uma pessoa.

Ela precisa conter informações como nome, idade e referência ao filho dela.
*/

// Criando o nó
class pessoa {
    constructor(nome, idade, filho=null) {
      this.nome = nome;
      this.idade = idade;
      this.filho = filho;
      this.next = null;
    }
  }

// Criando a lista
class LinkedList {
    constructor() {
        this.head = null;
    }

// Incluindo os metodos
    addFirst(nome, idade, filho) {
        const newPessoa = new pessoa(nome, idade, filho);
        newPessoa.next = this.head;
        this.head = newPessoa;
    }
  
    addLast(nome, idade, filho) {
        const newPessoa = new pessoa(nome, idade, filho);
        if (!this.head) {
            this.head = newPessoa;
            return;
        } 
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newPessoa;
    }
  
    removeFirst() {
        if (!this.head) {
            return;
        }
        const removedPessoa = this.head;
        this.head = this.head.next;
        removedPessoa.next = null;
        return removedPessoa.nome, removedPessoa.idade, removedPessoa.filho;
    }
  
    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            const removedPessoa = this.head;
            this.head = null;
            return removedPessoa.nome, removedPessoa.idade, removedPessoa.filho;
        }
        let current = this.head;
        let previous = null;
        while (current.next !== null) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        return current.Pessoa;
    }
  
    search(nome) {
        let current = this.head;
        while (current !== null) {
            if (current.nome === nome) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
  
    size() {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }
  
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.nome,current.idade,current.filho);
            current = current.next;
        }
    }
  }
  
  // Exemplo de uso
  const linkedList = new LinkedList();
  linkedList.addFirst("Ana", 35, 2);
  linkedList.addFirst("João", 40);
  linkedList.addLast("Maria", 65, 1);
  linkedList.addLast("Pedro", 30);
  
  console.log("Linked List:");
  linkedList.printList();
  
  console.log("Size:", linkedList.size());
  
  console.log("Procurando por Ana:", linkedList.search("Ana"));
  console.log("Procurando por Pedro:", linkedList.search("Pedro"));
  
  linkedList.removeFirst();
  console.log("Lista depois de remover a primeira pessoa:");
  linkedList.printList();
  
  linkedList.removeLast();
  console.log("Lista depois de remover a ultima pessoa:");
  linkedList.printList();
  