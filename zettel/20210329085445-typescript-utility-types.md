# Utility types in Typescript

These utility types are useful to facilitate common type transformations, allowing code to stay a bit more DRY and consistent across a project. Some of the more useful ones are:

`Partial<Type>` - marks all properties of `Type` as optional
`Required<Type>` - marks all properties of `Type` as required

`Pick<Type, Keys>` - constructs a type by picking properties (`Keys`) from `Type`
`Omit<Type, Keys>` - constructs a type by removing properties (`Keys`) from `Type`

`Parameters<Type>` - constructs a tuple type from the types used in the parameters of a function type `Type`
`ReturnType<Type>` - construts a type consisting of the return type of function `Type`



https://www.typescriptlang.org/docs/handbook/utility-types.html

#js
#ts