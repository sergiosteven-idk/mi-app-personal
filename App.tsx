import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { ProfileSection } from './components/ProfileSection'
import { SkillCard } from './components/SkillCard'
import { ProjectCard } from './components/ProjectCard'
import { ContactInfo as ContactInfoComponent } from './components/ContactInfo' // componente de Contacto

// ==================== INTERFACES ====================
interface ContactItem {
  icon: string
  label: string
  value: string
}

interface Skill {
  id: string
  emoji: string
  name: string
}

interface Project {
  id: string
  emoji: string
  title: string
  description: string
  tags: string[]
}

// ==================== TUS DATOS ====================
const personalInfo = {
  name: 'Sergio Steven Tique Becerra',
  title: 'Analista Desarrollador de Software',
  avatar: require('./assets/responsive.jpeg'),
  bio:
    'Apasionado por la tecnología y el desarrollo de software. Me especializo en crear aplicaciones web y móviles con React, Node.js y React Native. Además, tengo interés y experiencia práctica en hardware: ensamblaje y mantenimiento de equipos, diagnóstico de fallas, configuración de periféricos y redes básicas, e integración de IoT (sensores/actuadores) con aplicaciones móviles. Siempre busco aprender nuevas tecnologías y enfrentar desafíos interesantes, uniendo software + hardware para soluciones completas.',
}

const contacts: ContactItem[] = [
  { icon: '📧', label: 'Email', value: 'Sergiotiquebec101@gmail.com' },
  { icon: '📍', label: 'Ubicación', value: 'Bogotá D.C, Colombia' },
  { icon: '🔗', label: 'GitHub', value: 'github.com/sergiosteven-idk' },
]

const skills: Skill[] = [
  { id: '1', emoji: '⚛️', name: 'React Native' },
  { id: '2', emoji: '🚀', name: 'React.js' },
  { id: '3', emoji: '📘', name: 'TypeScript' },
  { id: '4', emoji: '🎨', name: 'TailwindCSS' },
  { id: '5', emoji: '📱', name: 'Expo' },
  { id: '6', emoji: '💻', name: 'Node.js' },
  { id: '7', emoji: '⚙️', name: 'Hardware' },
  { id: '8', emoji: '🐳', name: 'Docker' },
]

const projects: Project[] = [
  {
    id: '1',
    emoji: '👤',
    title: 'Portfolio Personal',
    description:
      'Aplicación móvil para mostrar mi perfil profesional, habilidades y proyectos realizados.',
    tags: ['React Native', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: '2',
    emoji: '🏢',
    title: 'Aplicación Educativa Inclusiva',
    description:
      'Software educativo inclusivo para personas con discapacidades cognitivas, desarrollado en colaboración con una ONG local.',
    tags: ['React', 'Firebase', 'Docker', 'Node.js', 'TypeScript'],
  },
]

// ==================== COMPONENTE PRINCIPAL ====================
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* HEADER MORADITO */}
        <View className="bg-purple-700 h-48 items-center justify-center">
          <Text className="text-white text-2xl font-bold tracking-wide">
            MI APP PERSONAL
          </Text>
          <Text className="text-purple-200 text-sm mt-1">
            Desarrollador React Native
          </Text>
        </View>

        {/* CONTENIDO PRINCIPAL */}
        <View className="px-5">
          {/* PERFIL */}
          <ProfileSection
            name={personalInfo.name}
            title={personalInfo.title}
            avatar={personalInfo.avatar}
            bio={personalInfo.bio}
          />

          {/* SEPARADOR: CONTACTO */}
          <View className="flex-row items-center justify-center my-6">
            <View className="w-16 h-px bg-gray-300" />
            <Text className="mx-4 text-purple-700 font-semibold text-center">
              Contacto
            </Text>
            <View className="w-16 h-px bg-gray-300" />
          </View>

          {/* CONTACTO */}
          <ContactInfoComponent contacts={contacts} />

          {/* SEPARADOR: HABILIDADES */}
          <View className="flex-row items-center justify-center my-6">
            <View className="w-16 h-px bg-gray-300" />
            <Text className="mx-4 text-purple-700 font-semibold text-center">
              Habilidades
            </Text>
            <View className="w-16 h-px bg-gray-300" />
          </View>

          {/* HABILIDADES */}
          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-6">
              <Text className="text-2xl font-bold text-purple-900">
                💪 Mis Habilidades
              </Text>
              <Text className="text-fuchsia-700 font-semibold bg-fuchsia-50 px-3 py-1 rounded-full">
                {skills.length} skills
              </Text>
            </View>
            {skills.map((skill) => (
              <SkillCard key={skill.id} emoji={skill.emoji} name={skill.name} />
            ))}
          </View>

          {/* SEPARADOR: PROYECTOS */}
          <View className="flex-row items-center justify-center my-6">
            <View className="w-16 h-px bg-gray-300" />
            <Text className="mx-4 text-purple-700 font-semibold text-center">
              Proyectos
            </Text>
            <View className="w-16 h-px bg-gray-300" />
          </View>

          {/* PROYECTOS */}
          <View className="mb-10">
            <View className="flex-row items-center justify-between mb-6">
              <Text className="text-2xl font-bold text-purple-900">
                🚀 Mis Proyectos
              </Text>
              <Text className="text-fuchsia-700 font-semibold bg-fuchsia-50 px-3 py-1 rounded-full">
                {projects.length} proyectos
              </Text>
            </View>
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                emoji={p.emoji}
                title={p.title}
                description={p.description}
                tags={p.tags}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
