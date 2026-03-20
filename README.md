# PHA 2030

Curso e materiais do projeto **PHA 2030 | Da Capacitacao a Transformacao**.

O repositorio reune:

- documentacao-base em `doc/`
- estrutura do curso HTML no padrao INEMA.CLUB em `curso/`
- landing page em `index.html`
- scripts de geracao em `scripts/`

## Tese central

IA nao deve ser tratada apenas como ferramenta ou automacao. O foco do PHA 2030 e preparar pessoas, equipes e empresas para adotar IA com clareza, criterio, capacidade e escala.

## Estrutura do curso

- `T1 Fundamentos do PHA 2030`
- `T2 Diagnostico e Conducao da Sala`
- `T3 Jornada de Transformacao e Oferta`

Cada trilha contem 4 modulos completos. Cada modulo possui 6 topicos no formato expandivel e pagina detalhada propria.

## Como regenerar o curso

```bash
node scripts/generate-course.mjs
```

Isso recria:

- `index.html`
- `curso/trilha1/*`
- `curso/trilha2/*`
- `curso/trilha3/*`

## Fontes de conteudo

Os materiais centrais usados na estruturacao do curso estao em `doc/`, com destaque para:

- `doc/conteudo-mestre.md`
- `doc/apostila-aluno.md`
- `doc/workshop-2h.md`
- `doc/slides.md`

