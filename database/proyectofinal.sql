-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Jul 10, 2024 at 07:44 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `proyectofinal`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_alumno`
--

CREATE TABLE `tbl_alumno` (
  `rut_a` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_alumno`
--

INSERT INTO `tbl_alumno` (`rut_a`) VALUES
('42028110-2'),
('6242178-9'),
('90980064-1');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_asignatura`
--

CREATE TABLE `tbl_asignatura` (
  `id_asignatura` int(11) NOT NULL,
  `nombre_asignatura` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_asignatura`
--

INSERT INTO `tbl_asignatura` (`id_asignatura`, `nombre_asignatura`) VALUES
(1, 'Matematicas'),
(2, 'Lenguaje'),
(3, 'Biologia'),
(4, 'Fisica'),
(5, 'Quimica');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_chat`
--

CREATE TABLE `tbl_chat` (
  `id_chat` int(11) NOT NULL,
  `emisor` varchar(11) NOT NULL,
  `receptor` varchar(11) NOT NULL,
  `mensaje` varchar(2000) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_chat`
--

INSERT INTO `tbl_chat` (`id_chat`, `emisor`, `receptor`, `mensaje`, `fecha`, `hora`) VALUES
(158, '49662560-9', '90980064-1', 'Estoy interesado en contratar tus clases. Por favor, contácteme para más detalles.                               Hola Ernesto Gomez\n\nEspero que este mensaje te encuentre bien. Me llamo Byron Becerra', '2024-07-10', '23:30:13'),
(159, '49662560-9', '90980064-1', '                              Hola Ernesto Gomez\n\nEspero que este mensaje te encuentre bien. Me llamo Byron Becerra y estoy muy interesado en contratar tus servicios como tutor/a.\n\nHe revisado tu perfil y me parece que tu experiencia y habilidades en Biologia III son exactamente lo que necesito para avanzar en mis estudios.\n\nMe gustaría discutir algunos detalles sobre cómo podríamos proceder:\n\nModalidad Preferida: Prefiero Presencial para nuestras sesiones.\n\n\nFecha Propuesta: ¿Estarías disponible el martes para nuestra primera sesión?\n\nDuración de las Sesiones: Estoy pensando en sesiones de [duración propuesta, por ejemplo, 1 hora].\n\nMétodo de Contacto: Puedes contactarme por correo electrónico a byron.becerra@gmail.com o por teléfono al +569448474. Estoy disponible martes y viernes.\nEspero con ansias tu respuesta para confirmar los detalles y proceder con la organización de nuestras sesiones de tutoría. ¡Estoy emocionado/a por trabajar contigo!\n                              \n\n\n                            ', '2024-07-10', '23:31:17'),
(160, '57669890-9', '90980064-1', '                              Hola Ernesto Gomez\r\n\r\nEspero que este mensaje te encuentre bien. Me llamo Byron Becerra y estoy muy interesado en contratar tus servicios como tutor/a.\r\n\r\nHe revisado tu perfil y me parece que tu experiencia y habilidades en Biologia III son exactamente lo que necesito para avanzar en mis estudios.\r\n\r\nMe gustaría discutir algunos detalles sobre cómo podríamos proceder:\r\n\r\nModalidad Preferida: Prefiero Presencial para nuestras sesiones.\r\n\r\n\r\nFecha Propuesta: ¿Estarías disponible el martes para nuestra primera sesión?\r\n\r\nDuración de las Sesiones: Estoy pensando en sesiones de [duración propuesta, por ejemplo, 1 hora].\r\n\r\nMétodo de Contacto: Puedes contactarme por correo electrónico a byron.becerra@gmail.com o por teléfono al +569448474. Estoy disponible martes y viernes.\r\nEspero con ansias tu respuesta para confirmar los detalles y proceder con la organización de nuestras sesiones de tutoría. ¡Estoy emocionado/a por trabajar contigo!\r\n                              \r\n', '2024-07-10', '23:32:11');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_ciudad`
--

CREATE TABLE `tbl_ciudad` (
  `id_ciudad` int(11) NOT NULL,
  `id_region` int(11) NOT NULL,
  `nombre_ciudad` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_ciudad`
--

INSERT INTO `tbl_ciudad` (`id_ciudad`, `id_region`, `nombre_ciudad`) VALUES
(1, 1, 'Arica'),
(2, 1, 'Parinacota'),
(3, 2, 'Iquique'),
(4, 2, 'Tamarugal'),
(5, 3, 'Antofagasta'),
(6, 3, 'El loa'),
(7, 3, 'Tocopilla'),
(8, 4, 'Chañaral'),
(9, 4, 'Huasco'),
(10, 4, 'Copiapó'),
(11, 5, 'Choapa'),
(12, 5, 'Elqui'),
(13, 5, 'Limarí'),
(14, 6, 'Isla de Pascua'),
(15, 6, 'Los Andes'),
(16, 6, 'Petorca'),
(17, 6, 'Quillota'),
(18, 6, 'San Antonio'),
(19, 6, 'Valparaíso'),
(20, 7, 'Chacabuco'),
(21, 7, 'Cordillera'),
(22, 7, 'Maipo'),
(23, 7, 'Melipilla'),
(24, 7, 'Santiago'),
(25, 7, 'Talagante');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_comuna`
--

CREATE TABLE `tbl_comuna` (
  `id_comuna` int(11) NOT NULL,
  `id_ciudad` int(11) NOT NULL,
  `nombre_comuna` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_comuna`
--

INSERT INTO `tbl_comuna` (`id_comuna`, `id_ciudad`, `nombre_comuna`) VALUES
(1, 20, 'Colina'),
(2, 20, 'Lampa'),
(3, 20, 'Tiltil'),
(4, 21, 'Pirque'),
(5, 21, 'Puente alto'),
(6, 21, 'San José de Maipo'),
(7, 22, 'Buin'),
(8, 22, 'Calera de tango'),
(9, 22, 'Paine'),
(10, 22, 'San bernardo'),
(11, 23, 'Alhué'),
(12, 23, 'Curacaví'),
(13, 23, 'María Pinto'),
(14, 23, 'Melipilla'),
(15, 23, 'San Pedro'),
(16, 24, 'Cerrillos'),
(17, 24, 'Cerro navia'),
(18, 24, 'Conchali'),
(19, 24, 'El bosque'),
(20, 24, 'Estacion central');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_docente`
--

CREATE TABLE `tbl_docente` (
  `rut_d` varchar(11) NOT NULL,
  `descripcion` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_docente`
--

INSERT INTO `tbl_docente` (`rut_d`, `descripcion`) VALUES
('2047318-5', 'Profesora con gusto en diferentes estudios, con ganas de enseñar'),
('49662560-9', 'Profesor con buena trayectoria y en busca de formar alumnos en todo Santiago. '),
('57669890-9', 'Enseño a precio justo y módico, conóceme. '),
('75887578-4', 'Soy un profesor y me gusta enseñar!');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_favorito`
--

CREATE TABLE `tbl_favorito` (
  `id_favorito` int(11) NOT NULL,
  `rut_d` varchar(11) NOT NULL,
  `rut_a` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_favorito`
--

INSERT INTO `tbl_favorito` (`id_favorito`, `rut_d`, `rut_a`) VALUES
(6, '1998142-5', '1-2'),
(7, '1-3', '1-2'),
(9, '2047318-5', '90980064-1'),
(10, '49662560-9', '90980064-1'),
(11, '57669890-9', '90980064-1');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_gradoacademico`
--

CREATE TABLE `tbl_gradoacademico` (
  `id_gradoacademico` int(11) NOT NULL,
  `grado_nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_gradoacademico`
--

INSERT INTO `tbl_gradoacademico` (`id_gradoacademico`, `grado_nombre`) VALUES
(1, 'Educación superior'),
(2, 'Enseñanza media'),
(3, 'Enseñanza basica');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_modalidad`
--

CREATE TABLE `tbl_modalidad` (
  `id_modalidad` int(11) NOT NULL,
  `modalidad_nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_modalidad`
--

INSERT INTO `tbl_modalidad` (`id_modalidad`, `modalidad_nombre`) VALUES
(1, 'Online'),
(2, 'Presencial'),
(3, 'Presencial y Online');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_persona`
--

CREATE TABLE `tbl_persona` (
  `rut` varchar(20) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `snombre` varchar(50) NOT NULL,
  `ap_pat` varchar(50) NOT NULL,
  `ap_mat` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `telefono` int(9) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `imagen` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_persona`
--

INSERT INTO `tbl_persona` (`rut`, `nombre`, `snombre`, `ap_pat`, `ap_mat`, `correo`, `telefono`, `pass`, `id_rol`, `imagen`) VALUES
('2047318-5', 'Maria', 'Elvira', 'Benavente', 'Benavente', 'Maria.Elvira@gmail.com', 954493303, '$2a$08$uGjCME5lkJbWrTevVo2uXOdLGPvHFRgW4Yw2G4oNLY2kiEtW06H3S', 1, 'https://f.rpp-noticias.io/2019/02/15/753297descarga-8jpg.jpg'),
('42028110-2', 'Lucas', 'Luis', 'Lucas', 'Luis', 'Lucas.Lucas@gmail.com', 949474722, '$2a$08$Nllw0WyJKUb2FBDnpniHH.FSpCMPTByeckyDNVsJWy0KelBxOLCT.', 2, 'https://i.ytimg.com/vi/wAOcYppjMBE/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAPi_zSe5kw_v-Ng2Tto9MYEKmrsw'),
('49662560-9', 'Ernesto', 'Espin', 'Gomez', 'Sepulveda', 'Ernesto.Espin@gmail.com', 948472367, '$2a$08$CgMLfv858Y2qzeHiIfVIlerr2h2a8vyg8vUb2TqmYkzDGXrOTqgUG', 1, 'https://static01.nytimes.com/newsgraphics/2024-02-02-disinfo-ai-faces-es/6ec4df5f-7a06-4a80-a348-7947a53f4497/_assets/human-1.jpg'),
('57669890-9', 'Hicham', 'Alba', 'Acedo', 'Guillermo', 'Hicham.Alba@gmail.com', 947846362, '$2a$08$Y1ysVuuT7LYKTWsTJfJzn.I9Pvxk0GymaLnIx/Gq6LjVdz6aTfktC', 1, 'https://www.intel.com/content/dam/www/central-libraries/us/en/images/2022-11/newsroom-deepfake-feat.jpg'),
('6242178-9', 'Juan', 'Manuel', 'Manuel', 'Roca', 'Juan.Roca@gmail.com', 954493303, '$2a$08$YlFaz7BYuaE.cpNV8WzBpeMwC8rBttmn3qaX3s8qIW.ldAQlwkL3O', 2, 'https://www.abadiadigital.com/wp-content/uploads/2014/11/van-gogh-tadao-cern.jpg'),
('75887578-4', 'Manuel', 'Piqueras', 'Domenech', 'Carlos', 'Manuel.Domenech@gmail.com', 948472492, '$2a$08$GHSqNFE5TaTNFJR2XUHplOoBpu8e//8dmTlzKRiuzxfBbsYi7EUSq', 1, 'https://i.ytimg.com/vi/wAOcYppjMBE/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAPi_zSe5kw_v-Ng2Tto9MYEKmrsw'),
('90980064-1', 'Hugo', 'Suarez', 'Ares', 'Arnau', 'Hugo.Suarez@gmail.com', 948472367, '$2a$08$P/AF53dOODM3KFjCChID1u8ox8Sxs4/18IQBxBrM1wZRYfhofNIU.', 2, 'https://cms-imgp.jw-cdn.org/img/p/1102013250/univ/art/1102013250_univ_lsr_lg.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_publicacion`
--

CREATE TABLE `tbl_publicacion` (
  `id_publicacion` int(11) NOT NULL,
  `contenido` varchar(2500) NOT NULL,
  `titulo` varchar(500) NOT NULL,
  `precio` int(11) NOT NULL,
  `id_modalidad` int(11) NOT NULL,
  `id_gradoacademico` int(11) NOT NULL,
  `id_asignatura` int(11) NOT NULL,
  `id_comuna` int(11) NOT NULL,
  `rut` varchar(20) NOT NULL,
  `resumen` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_publicacion`
--

INSERT INTO `tbl_publicacion` (`id_publicacion`, `contenido`, `titulo`, `precio`, `id_modalidad`, `id_gradoacademico`, `id_asignatura`, `id_comuna`, `rut`, `resumen`) VALUES
(33, 'Las matemáticas se pueden definir como “la ciencia que estudia las relaciones entre cantidades, magnitudes y propiedades, y las operaciones lógicas mediante las cuales se pueden deducir cantidades, magnitudes y propiedades desconocidas”, en general las propiedades de los números y las relaciones que se establecen entre ellos.\n\n', 'Matematica', 150000, 2, 3, 3, 5, '2047318-5', '\nLos sumerios, babilónicos, griegos, romanos, mayas, incas, chinos, islámicos, entre otras culturas antiguas, desarrollaron un sistema numérico. '),
(34, 'La biología se ocupa tanto de la descripción de las características y los comportamientos de los organismos individuales, como de las especies en su conjunto, así como de las relaciones entre los seres vivos y de las interacciones entre ellos y el entorno. De este modo, trata de estudiar la estructura y la dinámica funcional comunes a todos los seres vivos, con el fin de establecer las leyes generales que rigen la vida orgánica y los principios de ésta.6​\n\nLa escala de estudio va desde los subcomponentes biofísicos hasta los sistemas complejos, los cuales componen los niveles de la organización biológica. La biología moderna se divide en subdisciplinas según los tipos de organismos y la escala en que se los estudia. Por ejemplo, la biología molecular es el estudio de las biomoléculas fundamentales de la vida, mientras que la biología celular tiene como objeto el análisis de la célula, que es la unidad constitutiva básica de toda la vida. A niveles más elevados, la anatomía y la fisiología, por ejemplo, estudian la estructura y el funcionamiento interno de los organismos, respectivamente, mientras que la ecología se ocupa de los hábitats naturales y su relación con los seres vivos.', 'Biologia II', 15000, 3, 2, 3, 7, '2047318-5', 'La biología estudia a los seres vivos y todos los procesos y sistemas relacionados con la vida.'),
(35, 'La química es la ciencia que estudia la composición, estructura y propiedades de la materia, incluyendo su relación con la energía y también los cambios que pueden darse en ella a través de las llamadas reacciones. Es la ciencia que estudia las sustancias y las partículas que las componen, así como las distintas dinámicas que entre éstas pueden darse.\n\nLa química es una de las grandes ciencias contemporáneas, cuya aparición revolucionó el mundo para siempre. Esta ciencia ha ofrecido explicaciones funcionales y comprobables para la compleja conducta de los materiales conocidos, capaces de explicar tanto su permanencia como sus cambios.\n\nPor otro lado, los conocimientos químicos están presentes en la vida cotidiana, en la medida en que empleamos sustancias naturales y creamos otras artificiales. Procesos como la cocción, la fermentación, la metalurgia, la creación de materiales inteligentes e incluso muchos de los procesos que tienen lugar en nuestros cuerpos, pueden ser explicados a través de una perspectiva química (o bioquímica).', 'Quimica III', 25000, 3, 2, 5, 17, '49662560-9', 'La química es la ciencia que estudia la composición, estructura y propiedades de la materia, incluye'),
(36, 'MISIÓN \nLos biólogos estudian los organismos vivos y la vida en su acepción más amplia en combinación con su\nentorno. A través de la investigación, se esfuerzan por explicar los mecanismos funcionales, las interacciones y la\nevolución de los organismos.\nLas funciones que desempeñan los biólogos son muy diversas puesto que es una profesión con muchas ramas y especialidades que puede trabajar en ámbitos diversos (investigación y desarrollo, sanidad, industria biotecnológica, química,\nfarmacéutica, agricultura, medioambiente, docencia). Las más comunes son:\nFUNCIONES\nRealizar investigaciones en laboratorio y sobre el terreno para ampliar\nlos conocimientos científicos sobre los seres vivos.\nAplicar la investigación para resolver problemas en campos como\nel medio ambiente, la agricultura y la salud y desarrollar nuevos\nproductos, procesos y técnicas para uso farmacéutico, químico, agrario\ny medioambiental.\nDiseñar y realizar análisis, experimentos y pruebas en ámbitos y\nsectores diversos, como la salud humana, agricultura, ecología,\nmedioambiente.\nDiseñar y realizar evaluaciones de impacto medioambiental para\nidentificar cambios causados por factores naturales o humanos.\nAsesorar a la administración pública, organizaciones y empresas en\ncampos como la conservación, la gestión de recursos naturales, los\nefectos del cambio climático y la contaminación.', 'Biologia III Online', 10000, 1, 1, 3, 5, '57669890-9', 'La Biología es la ciencia que estudia la vida desde diferentes puntos de vista: La estudia desde un '),
(37, 'La física es una de las disciplinas académicas más antiguas, cuyas raíces se remontan a los inicios de la civilización, cuando el hombre empezó a tratar de entender las fuerzas que regían el mundo a su alrededor.\r\n\r\nSe trata de una disciplina tanto teórica (describe las leyes del universo) como experimental (pone en práctica de hipótesis respecto a dichas leyes), y se adhiere al modelo de comprobación y legitimación impulsado por el método científico. Es una de las ciencias fundamentales o centrales que existen, y dentro de su campo de estudio convergen a menudo la química, la biología y la electrónica, entre otras.\r\n\r\nInicialmente la física formaba parte, como tantas otras ciencias, de la filosofía o la filosofía natural de la antigüedad, pero a partir de la Revolución Científica del siglo XVII surgió como un campo independiente, interesado en las leyes fundamentales de la realidad y empleando el lenguaje formal de las matemáticas para expresarlas. En la actualidad, en cambio, la física es una de las disciplinas que más contribuye con el cambio del paradigma científico, industrial y tecnológico. ', 'Fisica Aplicada III', 15000, 1, 3, 4, 6, '57669890-9', 'La física, del griego fisis («naturaleza»), es la ciencia natural que estudia, mediante leyes fundamentales, la energía, la materia, el tiempo y el espacio. '),
(38, 'La comunicación requiere de este sistema de signos para llegar al objetivo del entendimiento común. Diversos factores entran en juego cuando se realiza la comunicación por medio del lenguaje, se ponen en marcha funciones como la inteligencia y la memoria lingüística.\r\n\r\nEl lenguaje constituye una de las características principales que separa al género humano de los animales. Es una capacidad innata que todos los individuos tienen, que comienza a desarrollarse a partir de la gestación y se establece definitivamente en la relación que mantiene el individuo con el mundo social en el que se desarrolla.\r\n\r\nDominar esta capacidad de comunicación le permite a cada individuo expresar el mensaje que desea transmitir de un modo particular.\r\n\r\nEs importante mencionar que el resto de los animales también tiene sus propios métodos para comunicarse, pero, en este caso, hablaremos del “lenguaje” como característica humana.', 'Lenguaje III', 2500, 1, 2, 2, 8, '57669890-9', 'El lenguaje es la capacidad que tiene el ser humano para expresarse y comunicarse, a través de diversos sistemas de signos: orales, escritos o gestuales.'),
(39, 'Descripción\r\nTemario\r\nVista Previa\r\n¡Bienvenidos/as a la IIIª edición online del curso de Biología y patología moleculares intensivas!\r\n\r\nDurante los últimos cinco años la Patología ha entrado definitivamente en la era del diagnóstico molecular donde tiene un papel fundamental y donde es nexo de unión del laboratorio con las disciplinas clínicas.\r\n\r\nLos cambios que se están produciendo están siendo muy rápidos y, a menudo, dramáticos, desde un punto de vista tanto técnico como conceptual: ya no se entiende el diagnóstico de las patologías sólo desde un punto de vista morfológico si no va acompañado de una cada vez más compleja información molecular pronóstica y predictiva.\r\n\r\nLamentablemente, y a pesar de los años pasados, los jóvenes especialistas de esta y otras especialidades tienen un acceso limitado y un conocimiento insuficiente de la tecnología molecular, ya imprescindible para ejercer su profesión.\r\n\r\nAsí, hemos profundizado en el conocimiento de la genómica del cáncer y la carcinogénesis, en el manejo molecular de los tumores sólidos como el cáncer de pulmón y colon, introduciendo una revisión del conocimiento de la respuesta inmune. Es nuestro deseo que este curso sea útil tanto a patólogos como a otros especialistas para adaptarse a los nuevos retos de la Medicina y que ello se traduzca en beneficio para los pacientes.\r\n\r\nTodos los contenidos ofrecidos en el Xº curso presencial están aquí organizados por temas, correspondientes a las ponencias de cada uno de los doctores. Dentro de cada unidad, aparte de la conferencia, que pueden visualizarla en High Definition, tienen un handout (pdf) que amplía información y una autoevaluación con preguntas tipo test. En algún caso, hay también links para profundizar más sobre la materia.\r\n\r\nEsperamos que os ayude en vuestra práctica diaria.', 'Biologia III Presencial', 15000, 2, 3, 3, 9, '75887578-4', 'Durante los últimos cinco años la Patología ha entrado definitivamente en la era del diagnóstico molecular donde tiene un papel fundamental y donde es nexo de unión del laboratorio con las disciplinas');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_region`
--

CREATE TABLE `tbl_region` (
  `id_region` int(11) NOT NULL,
  `nombre_region` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_region`
--

INSERT INTO `tbl_region` (`id_region`, `nombre_region`) VALUES
(1, 'Región de Arica y Parinacota'),
(2, 'Región de Tarapacá'),
(3, 'Región de Antofagasta'),
(4, 'Región de Atacama'),
(5, 'Región de Coquimbo'),
(6, 'Región de Valparaíso'),
(7, 'Región Metropolitana de Santiago'),
(8, 'Región del Libertador General Bernardo O’Higgins'),
(9, 'Región del Maule'),
(10, 'Región del Ñuble'),
(11, 'Región del Biobío'),
(12, 'Región de La Araucanía'),
(13, 'Región de Los Ríos'),
(14, 'Región de Los Lagos'),
(15, 'Región de Aysén del General Carlos Ibáñez del Campo'),
(16, 'Región de Magallanes y la Antártica Chilena');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_rol`
--

CREATE TABLE `tbl_rol` (
  `id_rol` int(11) NOT NULL,
  `nombre_rol` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_rol`
--

INSERT INTO `tbl_rol` (`id_rol`, `nombre_rol`) VALUES
(1, 'Docente'),
(2, 'Alumno');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_valoracion`
--

CREATE TABLE `tbl_valoracion` (
  `id_valoracion` int(11) NOT NULL,
  `puntaje_valoracion` int(11) NOT NULL,
  `comentario` varchar(100) NOT NULL,
  `rut_d` varchar(11) NOT NULL,
  `rut_a` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_valoracion`
--

INSERT INTO `tbl_valoracion` (`id_valoracion`, `puntaje_valoracion`, `comentario`, `rut_d`, `rut_a`) VALUES
(1, 5, 'buena clase', '2047318-5', '6242178-9'),
(3, 4, ' Buena clase', '49662560-9', '90980064-1'),
(4, 3, 'No me gusto la clase', '2047318-5', '90980064-1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_alumno`
--
ALTER TABLE `tbl_alumno`
  ADD PRIMARY KEY (`rut_a`);

--
-- Indexes for table `tbl_asignatura`
--
ALTER TABLE `tbl_asignatura`
  ADD PRIMARY KEY (`id_asignatura`);

--
-- Indexes for table `tbl_chat`
--
ALTER TABLE `tbl_chat`
  ADD PRIMARY KEY (`id_chat`),
  ADD KEY `rut_d` (`emisor`),
  ADD KEY `rut_a` (`receptor`);

--
-- Indexes for table `tbl_ciudad`
--
ALTER TABLE `tbl_ciudad`
  ADD PRIMARY KEY (`id_ciudad`),
  ADD KEY `id_region` (`id_region`);

--
-- Indexes for table `tbl_comuna`
--
ALTER TABLE `tbl_comuna`
  ADD PRIMARY KEY (`id_comuna`),
  ADD KEY `id_region` (`id_ciudad`);

--
-- Indexes for table `tbl_docente`
--
ALTER TABLE `tbl_docente`
  ADD PRIMARY KEY (`rut_d`);

--
-- Indexes for table `tbl_favorito`
--
ALTER TABLE `tbl_favorito`
  ADD PRIMARY KEY (`id_favorito`),
  ADD KEY `rut_profesor` (`rut_d`),
  ADD KEY `rut_estudiante` (`rut_a`);

--
-- Indexes for table `tbl_gradoacademico`
--
ALTER TABLE `tbl_gradoacademico`
  ADD PRIMARY KEY (`id_gradoacademico`);

--
-- Indexes for table `tbl_modalidad`
--
ALTER TABLE `tbl_modalidad`
  ADD PRIMARY KEY (`id_modalidad`);

--
-- Indexes for table `tbl_persona`
--
ALTER TABLE `tbl_persona`
  ADD PRIMARY KEY (`rut`),
  ADD KEY `id_rol` (`id_rol`);

--
-- Indexes for table `tbl_publicacion`
--
ALTER TABLE `tbl_publicacion`
  ADD PRIMARY KEY (`id_publicacion`),
  ADD KEY `id_modalidad` (`id_modalidad`),
  ADD KEY `id_gradoacademico` (`id_gradoacademico`),
  ADD KEY `id_asignatura` (`id_asignatura`),
  ADD KEY `id_comuna` (`id_comuna`),
  ADD KEY `rut` (`rut`);

--
-- Indexes for table `tbl_region`
--
ALTER TABLE `tbl_region`
  ADD PRIMARY KEY (`id_region`);

--
-- Indexes for table `tbl_rol`
--
ALTER TABLE `tbl_rol`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indexes for table `tbl_valoracion`
--
ALTER TABLE `tbl_valoracion`
  ADD PRIMARY KEY (`id_valoracion`),
  ADD KEY `rut_d` (`rut_d`),
  ADD KEY `rut_a` (`rut_a`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_chat`
--
ALTER TABLE `tbl_chat`
  MODIFY `id_chat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=161;

--
-- AUTO_INCREMENT for table `tbl_ciudad`
--
ALTER TABLE `tbl_ciudad`
  MODIFY `id_ciudad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `tbl_comuna`
--
ALTER TABLE `tbl_comuna`
  MODIFY `id_comuna` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `tbl_favorito`
--
ALTER TABLE `tbl_favorito`
  MODIFY `id_favorito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_publicacion`
--
ALTER TABLE `tbl_publicacion`
  MODIFY `id_publicacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `tbl_region`
--
ALTER TABLE `tbl_region`
  MODIFY `id_region` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `tbl_rol`
--
ALTER TABLE `tbl_rol`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_valoracion`
--
ALTER TABLE `tbl_valoracion`
  MODIFY `id_valoracion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_alumno`
--
ALTER TABLE `tbl_alumno`
  ADD CONSTRAINT `tbl_alumno_ibfk_1` FOREIGN KEY (`rut_a`) REFERENCES `tbl_persona` (`rut`);

--
-- Constraints for table `tbl_ciudad`
--
ALTER TABLE `tbl_ciudad`
  ADD CONSTRAINT `tbl_ciudad_ibfk_1` FOREIGN KEY (`id_region`) REFERENCES `tbl_region` (`id_region`);

--
-- Constraints for table `tbl_comuna`
--
ALTER TABLE `tbl_comuna`
  ADD CONSTRAINT `tbl_comuna_ibfk_1` FOREIGN KEY (`id_ciudad`) REFERENCES `tbl_ciudad` (`id_ciudad`);

--
-- Constraints for table `tbl_docente`
--
ALTER TABLE `tbl_docente`
  ADD CONSTRAINT `tbl_docente_ibfk_1` FOREIGN KEY (`rut_d`) REFERENCES `tbl_persona` (`rut`);

--
-- Constraints for table `tbl_favorito`
--
ALTER TABLE `tbl_favorito`
  ADD CONSTRAINT `tbl_favorito_ibfk_1` FOREIGN KEY (`rut_d`) REFERENCES `tbl_docente` (`rut_d`),
  ADD CONSTRAINT `tbl_favorito_ibfk_2` FOREIGN KEY (`rut_a`) REFERENCES `tbl_alumno` (`rut_a`);

--
-- Constraints for table `tbl_persona`
--
ALTER TABLE `tbl_persona`
  ADD CONSTRAINT `tbl_persona_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `tbl_rol` (`id_rol`);

--
-- Constraints for table `tbl_publicacion`
--
ALTER TABLE `tbl_publicacion`
  ADD CONSTRAINT `tbl_publicacion_ibfk_1` FOREIGN KEY (`id_gradoacademico`) REFERENCES `tbl_gradoacademico` (`id_gradoacademico`),
  ADD CONSTRAINT `tbl_publicacion_ibfk_2` FOREIGN KEY (`id_asignatura`) REFERENCES `tbl_asignatura` (`id_asignatura`),
  ADD CONSTRAINT `tbl_publicacion_ibfk_4` FOREIGN KEY (`id_modalidad`) REFERENCES `tbl_modalidad` (`id_modalidad`),
  ADD CONSTRAINT `tbl_publicacion_ibfk_5` FOREIGN KEY (`rut`) REFERENCES `tbl_docente` (`rut_d`),
  ADD CONSTRAINT `tbl_publicacion_ibfk_6` FOREIGN KEY (`id_comuna`) REFERENCES `tbl_comuna` (`id_comuna`);

--
-- Constraints for table `tbl_valoracion`
--
ALTER TABLE `tbl_valoracion`
  ADD CONSTRAINT `tbl_valoracion_ibfk_1` FOREIGN KEY (`rut_d`) REFERENCES `tbl_docente` (`rut_d`),
  ADD CONSTRAINT `tbl_valoracion_ibfk_2` FOREIGN KEY (`rut_a`) REFERENCES `tbl_alumno` (`rut_a`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
