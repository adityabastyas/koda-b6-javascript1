# Perulangan

## Flowchart Loop

```javascript
for (let x = 1; x <= 10; x++) {
  console.log(x);
  if (x === 5) {
    x = 10;
  }
}
```

```mermaid
flowchart TB
  start@{shape: circle}
  inisialState@{shape: lean-r, label : 'Input : x = 1'}
  condition@{shape: diamond, label : 'x <= 10'}
  log@{shape: lean-r, label : 'Output : x'}
  contitionIf@{shape: diamond, label: 'x === 5'}
  x10@{shape: lean-r, label: 'x = 10'}
  update@{shape: lean-r, label: 'x = x + 1'}


  selesai@{shape: dbl-circ, label, 'selesai'}

  start --> inisialState
  inisialState --> condition
  condition --True--> log
  condition --False-->selesai
  log ---> contitionIf
  contitionIf --True--> x10 --> update
  update --> condition
  contitionIf --False-->update
```

## Flowchat do while loop

```javascript
let x = 1;

do {
  console.log(x);

  if (x === 5) {
    x = 10;
  }

  x++;
} while (x <= 10);
```

```mermaid
flowchart TB
  start@{shape: circle}
  input@{shape: lean-r, label : 'Input : x = 1'}
  output@{shape: lean-r, label : 'Output : x'}
  condition5@{shape: diamond, label : 'x === 5'}
  x10@{shape: lean-r, label : 'x = 10'}
  update@{shape: lean-r, label : 'x++'}
  whileCondition@{shape: diamond, label : 'x <= 10'}
  stop@{shape: dbl-circ}

  start --> input
  input --> output
  output --> condition5
  condition5 -- True --> x10
  x10 --> update
  condition5 -- False --> update

  update --> whileCondition
  whileCondition -- True --> output
  whileCondition -- False --> stop


```
