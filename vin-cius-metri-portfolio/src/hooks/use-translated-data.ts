import { useLanguage } from "@/i18n/context";
import type {
  Project,
  TimelineItem,
  Education,
  Certification,
  WorkExperience,
} from "@/data/portfolio";

export function useTranslatedData() {
  const { t } = useLanguage();
  const d = t.data;

  function translateTechCategory(category: string): string {
    return d.techCategories[category as keyof typeof d.techCategories] ?? category;
  }

  function translateTechName(name: string): string {
    return d.technologies[name as keyof typeof d.technologies] ?? name;
  }

  function translateProject(project: Project): Project {
    const tr = d.projects[project.title as keyof typeof d.projects];
    const translatedFeatures = project.features?.map(
      (f) => (d.projectFeatures as Record<string, string>)[f] ?? f,
    );
    const translatedStatus = project.status
      ? (d.projectStatuses[project.status as keyof typeof d.projectStatuses] ?? project.status)
      : undefined;
    return {
      ...project,
      description: tr?.description ?? project.description,
      category: tr?.category ?? project.category,
      ...(translatedStatus !== undefined ? { status: translatedStatus } : {}),
      ...(translatedFeatures !== undefined ? { features: translatedFeatures } : {}),
    };
  }

  function translateTimelineItem(item: TimelineItem, index: number): TimelineItem {
    const key = String(index) as keyof typeof d.timeline;
    const tr = d.timeline[key];
    return {
      ...item,
      title: tr?.title ?? item.title,
      description: tr?.description ?? item.description,
    };
  }

  function translateEducation(edu: Education, index: number): Education {
    const key = String(index) as keyof typeof d.education;
    const tr = d.education[key];
    return {
      ...edu,
      course: tr?.course ?? edu.course,
      status: tr?.status ?? edu.status,
    };
  }

  function translateCertification(cert: Certification, _index: number): Certification {
    return cert;
  }

  function translateWorkExperience(work: WorkExperience, index: number): WorkExperience {
    const key = String(index) as keyof typeof d.workExperiences;
    const tr = d.workExperiences[key];
    return {
      ...work,
      role: tr?.role ?? work.role,
      type: tr?.type ?? work.type,
      description: tr?.description ?? work.description,
    };
  }

  function translateProjectFeature(feature: string): string {
    return (d.projectFeatures as Record<string, string>)[feature] ?? feature;
  }

  return {
    translateTechCategory,
    translateTechName,
    translateProject,
    translateTimelineItem,
    translateEducation,
    translateCertification,
    translateWorkExperience,
    translateProjectFeature,
    modal: d.modal,
  };
}
