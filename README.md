# Algoritma Javascript 1

## Task 1

## Flowchart

```mermaid
flowchart TD

  A@{shape: circle, label: "start"}
  B@{shape: lean-r, label: "input : r"}
  C@{shape: diamond, label: "r % 7 === 0"}
  D@{shape: rect, label: "phi =22 / 7"}
  E@{shape: rect, label: "phi =3.14"}
  F@{shape: rect, label: "luasLingkaran = phi * r * r"}
  G@{shape: rect, label: "kelilingLingkaran = 2 * phi * r"}
  H@{shape: lean-r, label: "Output : luasLingkaran"}
  I@{shape: lean-r, label: "Output : kelilingLingkaran"}

 J@{shape: dbl-circ, label: "selesai"}

  A --> B
  B --> C
  C --True--> D
  C --False--> E
  D --> F
  E --> F
  F --> G
  G --> H
  H --> I
  I --> J

```

