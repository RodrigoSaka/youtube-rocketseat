## O que resolve

Quais problemas GraphQL resolve?

- Overfetching
  - http://localhost:3000/users
    - DB (usuários e endereços)
- Underfetching
  - http://localhost:3000/users
    - DB (usuários)
  - http://localhost:3000/addresses
    - DB (endereço)

Desvantagens

- Cache
- Errors

Como GraphQL consulta

- http://localhost:3000/graphql

```gql
query {
	users {
		id
		name
		github
		
		addresses {
			city
			state
			country
		}
	}
}
```

