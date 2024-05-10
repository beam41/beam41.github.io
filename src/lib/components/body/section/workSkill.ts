import dayjs from 'dayjs';

export type SkillsLang =
	| 'js'
	| 'ts'
	| 'html'
	| 'css'
	| 'scss'
	| 'cs'
	| 'sql'
	| 'rust'
	| 'go'
	| 'py'
	| 'dart'
	| 'cpp';

export type SkillsFramework =
	| 'react'
	| 'netcore'
	| 'angular'
	| 'vue'
	| 'svelte'
	| 'solid'
	| 'express'
	| 'graphql'
	| 'adonis'
	| 'sqlserver'
	| 'mongo'
	| 'docker'
	| 'flask'
	| 'opencv'
	| 'flutter'
	| 'unity'
	| 'gin'
	| 'actix';

export type Skils = SkillsLang | SkillsFramework;

export const SkillsName = {
	js: 'JavaScript',
	ts: 'TypeScript',
	html: 'HTML',
	css: 'CSS',
	scss: 'SCSS',
	cs: 'C#',
	sql: 'SQL',
	rust: 'Rust',
	go: 'Go',
	py: 'Python',
	dart: 'Dart',
	cpp: 'C++',
	react: 'React',
	netcore: 'ASP.NET Core',
	angular: 'Angular',
	vue: 'Vue.js',
	svelte: 'Svelte',
	solid: 'Solid.js',
	express: 'Express.js',
	graphql: 'GraphQL',
	adonis: 'AdonisJS',
	sqlserver: 'SQL Server',
	mongo: 'MongoDB',
	docker: 'Docker',
	flask: 'Flask',
	opencv: 'OpenCV',
	flutter: 'Flutter',
	unity: 'Unity',
	gin: 'Gin Web Framework',
	actix: 'Actix Web',
} as const satisfies Record<Skils, string>;

export type WorkType = 'Full-time' | 'Intern';
export type Title = {
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
		skillsLang: ['js', 'html', 'css', 'scss'],
		skillsFramework: ['react', 'svelte', 'solid', 'docker'],
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
		skillsLang: ['js', 'ts', 'html', 'css', 'scss', 'cs'],
		skillsFramework: [
			'react',
			'angular',
			'netcore',
			'adonis',
			'sqlserver',
			'mongo',
			'docker',
			'express',
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
		skillsLang: ['js', 'ts', 'html', 'css', 'scss'],
		skillsFramework: ['vue', 'docker', 'graphql'],
	},
];

const othersSkillsLang = ['rust', 'go', 'py', 'dart', 'cpp'] as readonly SkillsLang[];

const othersSkillsFramework = [
	'flask',
	'opencv',
	'flutter',
	'unity',
	'gin',
	'actix',
] as readonly SkillsFramework[];

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
