export interface Layout {
  tag?: string;
  class?: string;
  title?: string;
  children: Block[];
}

export interface Block {
  tag?: string;
  width: string;
  height: string;
  margin?: string;
  padding?: string;
  children?: LsBlock[];
}

export interface LsBlock extends Block {
  chart?: string;
  img?: string;
  url?: string;
}

export const defaultLayout: Layout = {
  tag: 'ls-container',
  class: 'main',
  children: [
    {
      width: '',
      height: '',
      children: [
        {
          width: '',
          height: ''
        }
      ]
    },
    {
      width: '',
      height: ''
    },
    {
      width: '',
      height: ''
    }
  ]
}
