# Struct embedding in Go

[[20200720141248-go-struct]]

Structs can be composed by adding one struct as a field to another struct, which allows you to access that nested struct. 
```go
type CelestialBody struct {
    Name           string
    Mass           int64
    Diameter       int64
}

type Planet struct {
    HeavenlyBody     CelestialBody
    Satellites       []string
    next, previous   *Planet
}
```

Now we can access fields like `Mass` through the `HeavenlyBody` field.
```go
var p Planet
p.HeavenlyBody.Name = "Venus"
p.HeavenlyBody.Mass = 4.87e15
p.Sattelites = []string{"Mobus"}
```

_Struct embedding_ allows you to remove the verbosity of having to access the nested struct through its name. A named struct can be embedded into another struct without using a field name.
```go
type Planet struct {
    CelestialBody    // Anonymous field: No name, only a type
    Satellites       []string
    next, previous   *Planet
}
```

Which allows access of the embedded struct fields as if they were fields on the 'parent struct', e.g. `p.Mass`. This also works for methods that are part of the embedded struct [[20200720152312-go-methods]].

If there is a name clash - a field shared between the two structs - in this case the embedded struct shortcut no longer works, and the field will reference the field on the 'parent' struct instead. The embedded struct field can still be accessed through its long form.

When using a struct literal to initialise a struct that's embedded, the embedded struct needs to be initalised just like normal field values.
```go
p := Planet{
    CelestialBody: CelestialBody{
        Name: "Mercury",
        Diameter: 4879,
    },
    HasAtmosphere: true,
}
```

#go
#structs