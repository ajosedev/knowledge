# Destructuring + Typescript

Destructuring lets you pick out values from an array or object and assign them to variables. As part of this, you can easily assign default values. Note that the default value is only applied **when the property is not present, or has the value of undefined**. It does not apply when the property value has null.

[[ts]] is a bit strange here though. It's different when destructuring in a function body vs function parameters.
**Typescript does not validate types when destructuring inside the function body.** In the following example, there is no type error.

```ts
interface Props {
    position?: 'top-left' | 'top-right';
    foo: number;
}

function Component(props: Props) {
	// No type issues
    let { foo = 'string', position = 'abc' } = props;

	// Does still cause a type issue
	position = 4;
}
```

However if you destructure inside the function parameters, it will test the types:
```ts
interface Props {
    position?: 'top-left' | 'top-right';
    foo: number;
}

// Throws an error for both, regardless of one being optional
function Component({ foo = 'string', position = 'abc' }: Props) {
    
}
```

There seems to be no difference if the property is optional either.

https://www.typescriptlang.org/play/?#code/JYOwLgpgTgZghgYwgAgApQPYAcDOyDeAUMiclhjsGMBiAPwBcyA5GNgLQA2EMYzyAHxZss7KMADmACz4BuQgF9ChGAFcQCarWQBhDAFtyICOAAUGAEYArJumw4AlAWKkEtHGAJkKVGiGQAvCxwFgj8CoHIllbySirqmn66BkYmYAAqAO4YpvjelFr+QcwhYcgKtpi4TkSkyIpAA