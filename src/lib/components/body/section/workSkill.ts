import dayjs from 'dayjs';

type SkillsLang =
	| 'JavaScript'
	| 'TypeScript'
	| 'HTML'
	| 'CSS'
	| 'SCSS'
	| 'C#'
	| 'SQL'
	| 'Rust'
	| 'Go'
	| 'Python'
	| 'Dart'
	| 'C++';

type SkillsFramework =
	| 'React'
	| 'ASP.NET Core'
	| 'Angular'
	| 'Vue.js'
	| 'Svelte'
	| 'Solid.js'
	| 'Express.js'
	| 'GraphQL'
	| 'AdonisJS'
	| 'SQL Server'
	| 'MongoDB'
	| 'Docker'
	| 'Flask'
	| 'OpenCV'
	| 'Flutter'
	| 'Unity';

const SkillColorClasses = {
	JavaScript: 'js',
	TypeScript: 'ts',
	HTML: 'html',
	CSS: 'css',
	SCSS: 'scss',
	'C#': 'cs',
	SQL: 'sql',
	Rust: 'rust',
	Go: 'go',
	Python: 'py',
	Dart: 'dart',
	'C++': 'cpp',
	React: 'react',
	'ASP.NET Core': 'netcore',
	Angular: 'angular',
	'Vue.js': 'vue',
	Svelte: 'svelte',
	'Solid.js': 'solid',
	'Express.js': 'express',
	GraphQL: 'graphql',
	AdonisJS: 'adonis',
	'SQL Server': 'sqlserver',
	MongoDB: 'mongo',
	Docker: 'docker',
	Flask: 'flask',
	OpenCV: 'opencv',
	Flutter: 'flutter',
	Unity: 'unity',
} as const satisfies Record<SkillsLang | SkillsFramework, string>;

type WorkType = 'Full-time' | 'Intern';
type Title = {
	readonly name: string;
	readonly type: WorkType;
	readonly start: dayjs.Dayjs;
	readonly end?: dayjs.Dayjs;
};
export type WorkPlace = {
	readonly place: string;
	readonly title: Title[];
	readonly skillsLang: readonly SkillsLang[];
	readonly skillsFramework: readonly SkillsFramework[];
};

export const works: readonly WorkPlace[] = [
	{
		place: 'EveryMatrix',
		title: [
			{
				name: 'Middle Frontend Developer',
				type: 'Full-time',
				start: dayjs('2023-09'),
			},
		],
		skillsLang: ['JavaScript', 'HTML', 'CSS', 'SCSS'],
		skillsFramework: ['React', 'Svelte', 'Solid.js', 'Docker'],
	},
	{
		place: 'Manao Software',
		title: [
			{
				name: 'Mid-Level Web Developer',
				type: 'Full-time',
				start: dayjs('2022-04'),
				end: dayjs('2023-09'),
			},
			{
				name: 'Junior Developer',
				type: 'Full-time',
				start: dayjs('2021-04'),
				end: dayjs('2022-03'),
			},
		],
		skillsLang: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS', 'C#'],
		skillsFramework: [
			'React',
			'Angular',
			'ASP.NET Core',
			'AdonisJS',
			'SQL Server',
			'MongoDB',
			'Docker',
			'Express.js',
		],
	},
	{
		place: 'Artisan Digital',
		title: [
			{
				name: 'Frontend Developer',
				type: 'Intern',
				start: dayjs('2021-05'),
				end: dayjs('2021-10'),
			},
		],
		skillsLang: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS'],
		skillsFramework: ['Vue.js', 'Docker', 'GraphQL'],
	},
];

const othersSkillsLang = ['Rust', 'Go', 'Python', 'Dart', 'C++'] as readonly SkillsLang[];

const othersSkillsFramework = ['Flask', 'OpenCV', 'Flutter', 'Unity'] as readonly SkillsFramework[];

// ensure no duplicate
const productionSkillsLangSet = new Set(works.map((wp) => wp.skillsLang).flat()) as Readonly<
	Set<SkillsLang>
>;

const productionSkillsFrameworkSet = new Set(
	works.map((wp) => wp.skillsFramework).flat(),
) as Readonly<Set<SkillsFramework>>;

export const productionSkillsLang = [...productionSkillsLangSet].sort() as readonly SkillsLang[];

export const productionSkillsFramework = [
	...productionSkillsFrameworkSet,
].sort() as readonly SkillsFramework[];

export const hobbySkillsLang = othersSkillsLang
	.filter((v) => !productionSkillsLangSet.has(v))
	.sort() as readonly SkillsLang[];

export const hobbySkillsFramework = othersSkillsFramework
	.filter((v) => !productionSkillsFrameworkSet.has(v))
	.sort() as readonly SkillsFramework[];
