# Algoritma Javascript 1

## Task 1

## Flowchart

```mermaid
flowchart TD

  A@{shape: circle, label: "start"}
  B@{shape: lean-r, label: "input : r"}
  C@{shape: rect, label: "phi = 0"}
  D@{shape: diamond, label: "r % 7 === 0"}
  E@{shape: rect, label: "phi =22 / 7"}
  F@{shape: rect, label: "phi =3.14"}
  G@{shape: rect, label: "luasLingkaran = phi * r * r"}
  H@{shape: rect, label: "kelilingLingkaran = 2 * phi * r"}
  I@{shape: lean-r, label: "Output : luasLingkaran"}
  J@{shape: lean-r, label: "Output : kelilingLingkaran"}

 K@{shape: dbl-circ, label: "selesai"}

  A --> B
  B --> C
  C --> D
  D --True--> E
  D --False-->F
  E --> G
  F --> G
  G --> H
  H --> I
  I --> J
  J --> K


```
