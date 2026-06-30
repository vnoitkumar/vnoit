type Role = {
  title: string;
  start: string; // "YYYY-MM"
  end?: string; // "YYYY-MM"; omit while the role is ongoing
  detail?: string;
};

type Job = {
  company: string;
  initials: string;
  employmentType?: string;
  location: string;
  roles: Role[];
};

type School = {
  name: string;
  initials: string;
  degree: string;
  period: string;
};

const jobs: Job[] = [
  {
    company: "Thoughtworks",
    initials: "Tw",
    employmentType: "Full-time",
    location: "Bengaluru, Karnataka, India · Hybrid",
    roles: [
      { title: "Lead Consultant", start: "2025-09" },
      { title: "Senior Consultant", start: "2021-01", end: "2025-08" },
    ],
  },
  {
    company: "Contus",
    initials: "C",
    employmentType: "Full-time",
    location: "Chennai, Tamil Nadu, India",
    roles: [
      {
        title: "Senior Application Developer",
        start: "2020-06",
        end: "2020-12",
        detail: "Remote",
      },
      {
        title: "Application Developer",
        start: "2019-01",
        end: "2020-05",
        detail: "Hybrid",
      },
    ],
  },
  {
    company: "FinMomenta",
    initials: "Fm",
    employmentType: "Full-time",
    location: "Chennai, Tamil Nadu, India · On-site",
    roles: [
      { title: "Senior Software Engineer", start: "2018-07", end: "2018-12" },
    ],
  },
  {
    company: "SP Robotic Works",
    initials: "SP",
    location: "Chennai, Tamil Nadu, India · On-site",
    roles: [
      { title: "Senior Software Engineer", start: "2016-10", end: "2018-06" },
      { title: "Web Developer", start: "2016-04", end: "2016-09" },
      {
        title: "Intern",
        start: "2016-02",
        end: "2016-03",
        detail: "Internship",
      },
    ],
  },
];

const education: School[] = [
  {
    name: "Aarupadai Veedu Institute Of Technology",
    initials: "Av",
    degree: "Bachelor's degree, Computer Science",
    period: "2012 - 2016",
  },
];

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function ymToIndex(ym: string): number {
  const [year, month] = ym.split("-").map(Number);
  return year * 12 + (month - 1);
}

function formatMonth(ym: string): string {
  const [year, month] = ym.split("-").map(Number);
  return `${MONTHS[month - 1]} ${year}`;
}

function currentYM(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

function formatDuration(months: number): string {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (remainingMonths > 0)
    parts.push(`${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`);
  return parts.length > 0 ? parts.join(" ") : "0 mos";
}

// LinkedIn counts both the start and end month, so a single-month stint reads
// as "1 mo". The + 1 keeps these totals matching what LinkedIn shows.
function durationBetween(start: string, end: string): string {
  return formatDuration(ymToIndex(end) - ymToIndex(start) + 1);
}

function rolePeriod(role: Role, now: string): string {
  const endLabel = role.end ? formatMonth(role.end) : "Present";
  const duration = durationBetween(role.start, role.end ?? now);
  return `${formatMonth(role.start)} - ${endLabel} · ${duration}`;
}

function jobMeta(job: Job, now: string): string {
  const earliestStart = job.roles
    .map((role) => role.start)
    .reduce((a, b) => (a < b ? a : b));
  const ongoing = job.roles.some((role) => !role.end);
  const latestEnd = ongoing
    ? now
    : job.roles
        .map((role) => role.end as string)
        .reduce((a, b) => (a > b ? a : b));
  const total = durationBetween(earliestStart, latestEnd);
  return job.employmentType ? `${job.employmentType} · ${total}` : total;
}

function Avatar({ initials }: { initials: string }) {
  return (
    <span
      aria-hidden="true"
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-jet-black/15 dark:border-baby-powder/15 bg-jet-black/[0.03] dark:bg-baby-powder/[0.03] text-sm font-bold text-jet-black/70 dark:text-baby-powder/70"
    >
      {initials}
    </span>
  );
}

export default function Career() {
  const now = currentYM();

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="max-w-3xl border-t border-jet-black/10 dark:border-baby-powder/10 pt-12 pb-16">
        <h2 className="text-2xl font-bold leading-snug">Experience</h2>
        <ol className="mt-6 space-y-8">
          {jobs.map((job) => (
            <li key={job.company} className="flex gap-4">
              <Avatar initials={job.initials} />
              <div className="flex-1">
                <h3 className="text-lg font-bold leading-snug">
                  {job.company}
                </h3>
                <p className="text-sm font-medium text-jet-black/70 dark:text-baby-powder/70">
                  {jobMeta(job, now)}
                </p>
                <p className="text-sm text-jet-black/60 dark:text-baby-powder/60">
                  {job.location}
                </p>

                <ol className="mt-4 space-y-4 border-l border-jet-black/15 dark:border-baby-powder/15">
                  {job.roles.map((role) => (
                    <li key={role.title} className="relative pl-5">
                      <span
                        aria-hidden="true"
                        className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-baby-powder dark:border-jet-black bg-violet-700 dark:bg-violet-300"
                      />
                      <h4 className="font-semibold leading-snug">
                        {role.title}
                      </h4>
                      <p className="text-sm text-jet-black/70 dark:text-baby-powder/70">
                        {rolePeriod(role, now)}
                      </p>
                      {role.detail ? (
                        <p className="text-sm text-jet-black/60 dark:text-baby-powder/60">
                          {role.detail}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="text-2xl font-bold leading-snug mt-12">Education</h2>
        <ol className="mt-6 space-y-8">
          {education.map((school) => (
            <li key={school.name} className="flex gap-4">
              <Avatar initials={school.initials} />
              <div className="flex-1">
                <h3 className="text-lg font-bold leading-snug">{school.name}</h3>
                <p className="text-sm font-medium text-jet-black/70 dark:text-baby-powder/70">
                  {school.degree}
                </p>
                <p className="text-sm text-jet-black/60 dark:text-baby-powder/60">
                  {school.period}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
