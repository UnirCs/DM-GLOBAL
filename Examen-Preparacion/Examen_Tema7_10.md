# Preguntas de Examen - Temas 7-10: React Native, Navegación y Funcionalidades del Dispositivo

## Pregunta 1: Navegación por Stack en Expo Router

**Observa la siguiente estructura de carpetas y el archivo `_layout.jsx`. ¿Cómo se accedería a la pantalla de detalles de la película con id=5?**

```
app/
├── _layout.jsx
├── index.jsx
└── (stack)/
    ├── _layout.jsx
    ├── home/
    │   └── index.jsx
    └── landing/
        └── [id]/
            └── index.jsx
```

```jsx
// app/(stack)/_layout.jsx
import { Stack } from "expo-router";

const StackLayout = () => {
    return (
        <Stack screenOptions={{
            headerShown: true,
            headerStyle: { backgroundColor: "#0096c3" },
            headerTintColor: "#fff",
        }}>
            <Stack.Screen name="home/index" options={{ title: "Inicio" }} />
            <Stack.Screen name="landing/[id]/index" options={({ route }) => ({
                title: `Película ${route.params.id}`,
            })} />
        </Stack>
    );
};

export default StackLayout;
```

```jsx
// Importación necesaria para usar router
import { router } from 'expo-router';
```

**Opciones:**

- a) `router.push('/landing/5')`
- b) `router.push('/stack/landing/5')`
- c) `router.goTo('/(stack)/landing/5')`
- d) `navigation.navigate('landing', { id: 5 })`

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: a) `router.push('/landing/5')`**

**Explicación:**

En Expo Router, los **grupos de rutas** (carpetas con paréntesis como `(stack)`) son **segmentos no coincidentes** que **no forman parte de la URL final**. Esto significa que la ruta `/landing/5` es la correcta, ya que `(stack)` solo define el layout a aplicar pero no aparece en la URL de navegación.

| Estructura de carpetas | Ruta de navegación |
|------------------------|-------------------|
| `app/(stack)/landing/[id]/index.jsx` | `/landing/{valor}` |

El parámetro dinámico `[id]` se reemplaza directamente por el valor en la URL.

**Formas válidas de navegar:**

```jsx
import { router } from 'expo-router';

// Opción 1: Push con ruta (sin el grupo entre paréntesis)
router.push('/landing/5');

// Opción 2: Con objeto de parámetros
router.push({
    pathname: '/landing/[id]',
    params: { id: 5 }
});

// Opción 3: Usando Link
<Link href="/landing/5">Ver película</Link>
```

**Para obtener el parámetro en el componente destino:**

```jsx
import { useLocalSearchParams } from 'expo-router';

const MovieDetails = () => {
    const { id } = useLocalSearchParams();
    // id = "5" (siempre string)
    return <Text>Película: {id}</Text>;
};
```

**Nota importante sobre grupos de rutas:**
- Los grupos `(nombre)` sirven para **organizar** archivos y aplicar **layouts compartidos**
- **No aparecen** en la URL final de navegación
- Permiten tener múltiples layouts sin afectar la estructura de URLs

**¿Por qué las otras opciones son incorrectas?**
- **b)** `/stack/` sin paréntesis no es un grupo de rutas, sería una carpeta literal que no existe
- **c)** El método `router.goTo()` no existe en Expo Router
- **d)** Esta es la sintaxis de React Navigation, no de Expo Router. En Expo Router se usa `router.push()` con rutas basadas en archivos

</details>

---

## Pregunta 2: Navegación por Tabs

**Dado el siguiente layout de Tabs, ¿qué se mostrará en la barra de navegación inferior?**

```jsx
// app/tabs/_layout.jsx
import React from 'react';
import { Tabs } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#0096c3',
            headerShown: false,
            tabBarStyle: { backgroundColor: 'black' }
        }}>
            <Tabs.Screen
                name="(stack)"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="tickets/index"
                options={{
                    title: 'Entradas',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="ticket-outline" color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile/index"
                options={{
                    href: null,
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                }}
            />
        </Tabs>
    );
};
```

**Opciones:**

- a) 3 tabs: Home, Entradas, Perfil
- b) 2 tabs: Home, Entradas (Perfil está oculto con `href: null`)
- c) 3 tabs pero Perfil no es clickeable
- d) Error: no se puede usar `href: null` en Tabs

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) 2 tabs: Home, Entradas (Perfil está oculto con `href: null`)**

**Explicación:**

La propiedad `href: null` en las opciones de un `Tabs.Screen` **oculta ese tab de la barra de navegación**, pero la ruta sigue existiendo y se puede navegar a ella programáticamente.

| Propiedad | Efecto |
|-----------|--------|
| `href: null` | Oculta el tab de la barra de navegación |
| `tabBarButton: () => null` | Alternativa para ocultar el tab |
| `tabBarStyle: { display: 'none' }` | Oculta toda la barra de tabs |

**Casos de uso para `href: null`:**

1. **Pantallas auxiliares:** Pantallas que solo se acceden desde otras, no desde el tab bar
2. **Pantallas condicionales:** Mostrar/ocultar tabs según el rol del usuario
3. **Navegación anidada:** Stacks dentro de tabs que no necesitan tab propio

**Cómo navegar a una pantalla oculta:**

```jsx
// Aunque el tab esté oculto, la ruta existe
router.push('/tabs/profile');
```

**Estructura visual resultante:**

```
┌─────────────────────────┐
│                         │
│      Contenido          │
│                         │
├─────────────────────────┤
│  🏠 Home  │  🎟 Entradas │  ← Solo 2 tabs visibles
└─────────────────────────┘
```

</details>

---

## Pregunta 3: Navegación por Drawer

**Observa el siguiente layout de Drawer. ¿Qué propiedad permite personalizar completamente el contenido del drawer lateral?**

```jsx
// app/(drawer)/_layout.jsx
import React from 'react';
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import CinemaDrawer from "../../components/CinemaDrawer";

const DrawerLayout = () => {
    return (
        <Drawer
            drawerContent={CinemaDrawer}
            screenOptions={{
                overlayColor: 'rgba(0,0,0,0.4)',
                drawerActiveTintColor: '#427787',
                headerShown: false,
            }}
        >
            <Drawer.Screen
                name="(tabs)"
                options={{
                    drawerLabel: 'Inicio',
                    title: 'Inicio',
                    drawerIcon: () => <Ionicons name="home-outline" size={24} color="black" />
                }}
            />
            <Drawer.Screen
                name="about/index"
                options={{
                    drawerLabel: 'Sobre nosotros',
                    title: 'Sobre nosotros',
                    drawerIcon: () => <Ionicons name="people-outline" size={24} color="black" />
                }}
            />
        </Drawer>
    );
};
```

**Opciones:**

- a) `screenOptions`
- b) `drawerContent`
- c) `drawerLabel`
- d) `overlayColor`

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) `drawerContent`**

**Explicación:**

La propiedad `drawerContent` permite **reemplazar completamente** el contenido del drawer lateral con un componente personalizado.

| Propiedad | Función |
|-----------|---------|
| `drawerContent` | Componente personalizado para el drawer completo |
| `screenOptions` | Opciones comunes para todas las pantallas |
| `drawerLabel` | Texto del item en el drawer por defecto |
| `overlayColor` | Color de la capa semi-transparente al abrir |
| `drawerActiveTintColor` | Color del item activo |

**Ejemplo de componente personalizado para el drawer:**

```jsx
// components/CinemaDrawer.jsx
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CinemaDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            {/* Header personalizado */}
            <View className="p-4 bg-blue-500">
                <Image source={require('../assets/logo.png')} />
                <Text className="text-white text-xl">UNIR Cinema</Text>
            </View>
            
            {/* Items del drawer (automáticos) */}
            <DrawerItemList {...props} />
            
            {/* Footer personalizado */}
            <View className="p-4">
                <Text>Versión 1.0.0</Text>
            </View>
        </DrawerContentScrollView>
    );
};

export default CinemaDrawer;
```

**Para abrir/cerrar el drawer programáticamente:**

```jsx
import { useNavigation, DrawerActions } from '@react-navigation/native';

const MyComponent = () => {
    const navigation = useNavigation();
    
    const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer());
    const closeDrawer = () => navigation.dispatch(DrawerActions.closeDrawer());
    const toggleDrawer = () => navigation.dispatch(DrawerActions.toggleDrawer());
};
```

</details>

---

## Pregunta 4: Componentes Básicos - View y Pressable

**¿Cuál es la diferencia principal entre usar `<TouchableOpacity>` y `<Pressable>` en React Native?**

```jsx
// Opción A: TouchableOpacity
<TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
    <Text>Presionar</Text>
</TouchableOpacity>

// Opción B: Pressable
<Pressable 
    onPress={handlePress}
    onLongPress={handleLongPress}
    style={({ pressed }) => [
        { opacity: pressed ? 0.7 : 1 }
    ]}
>
    <Text>Presionar</Text>
</Pressable>
```

**Opciones:**

- a) `TouchableOpacity` es más nuevo y tiene más funcionalidades
- b) `Pressable` es el componente recomendado actualmente, ofrece más control sobre estados (pressed, hovered) y eventos (onLongPress)
- c) Son exactamente equivalentes, solo cambia la sintaxis
- d) `TouchableOpacity` solo funciona en iOS, `Pressable` es multiplataforma

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) `Pressable` es el componente recomendado actualmente, ofrece más control sobre estados (pressed, hovered) y eventos (onLongPress)**

**Explicación:**

`Pressable` es el componente moderno de React Native para manejar interacciones táctiles:

| Característica | TouchableOpacity | Pressable |
|---------------|------------------|-----------|
| Estado `pressed` | ❌ No | ✅ Sí |
| Estado `hovered` (web) | ❌ No | ✅ Sí |
| `onLongPress` | ✅ Sí | ✅ Sí |
| `onPressIn` / `onPressOut` | ✅ Sí | ✅ Sí |
| `delayLongPress` | ✅ Sí | ✅ Sí |
| `hitSlop` | ✅ Sí | ✅ Sí (mejorado) |
| Estilo condicional | ❌ No | ✅ Sí (`style` como función) |
| Recomendado | Antiguo | ✅ Actual |

**Ventajas de Pressable:**

```jsx
<Pressable
    onPress={() => console.log('Press')}
    onLongPress={() => console.log('Long press')}
    onPressIn={() => console.log('Dedo hacia abajo')}
    onPressOut={() => console.log('Dedo levantado')}
    delayLongPress={500}
    style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed
    ]}
>
    {({ pressed }) => (
        <Text style={pressed ? styles.textPressed : styles.text}>
            {pressed ? 'Presionado!' : 'Presionar'}
        </Text>
    )}
</Pressable>
```

**Con NativeWind/TailwindCSS:**

```jsx
<Pressable
    className="p-3 rounded-md bg-blue-500 active:opacity-90"
    onPress={onPress}
>
    <Text className="text-white text-center">Presionar</Text>
</Pressable>
```

</details>

---

## Pregunta 5: Expo Contacts

**Dado el siguiente código para acceder a los contactos del dispositivo, ¿qué falta para que funcione correctamente?**

```jsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        (async () => {
            // ¿Qué falta aquí?
            
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.PhoneNumbers],
            });
            
            if (data.length > 0) {
                setContacts(data);
            }
        })();
    }, []);

    return (
        <FlatList
            data={contacts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Text>{item.name}</Text>}
        />
    );
};
```

**Opciones:**

- a) Nada, el código está completo
- b) Falta solicitar permisos con `Contacts.requestPermissionsAsync()`
- c) Falta importar `PermissionsAndroid` de React Native
- d) Falta añadir `expo-contacts` en `app.json`

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) Falta solicitar permisos con `Contacts.requestPermissionsAsync()`**

**Explicación:**

Para acceder a los contactos del dispositivo, **siempre** se debe solicitar permiso al usuario primero. Sin el permiso concedido, `getContactsAsync()` fallará.

**Código correcto:**

```jsx
useEffect(() => {
    (async () => {
        // 1. Solicitar permisos
        const { status } = await Contacts.requestPermissionsAsync();
        
        // 2. Verificar si el permiso fue concedido
        if (status === 'granted') {
            // 3. Obtener contactos
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.PhoneNumbers],
            });
            
            if (data.length > 0) {
                // Filtrar contactos sin número de teléfono
                const validContacts = data.filter(
                    contact => contact.phoneNumbers && contact.phoneNumbers.length > 0
                );
                setContacts(validContacts);
            }
        } else {
            // Manejar el caso de permiso denegado
            Alert.alert('Permisos', 'Se necesitan permisos para acceder a los contactos');
        }
    })();
}, []);
```

**Flujo de permisos en Expo:**

| Método | Función |
|--------|---------|
| `requestPermissionsAsync()` | Solicita permiso al usuario (muestra diálogo) |
| `getPermissionsAsync()` | Verifica el estado actual sin solicitar |

**Posibles estados del permiso:**

```jsx
const { status } = await Contacts.requestPermissionsAsync();
// status puede ser:
// - 'granted': Permiso concedido
// - 'denied': Permiso denegado
// - 'undetermined': Aún no se ha solicitado
```

**Configuración en app.json (también necesaria):**

```json
{
  "expo": {
    "plugins": [
      [
        "expo-contacts",
        {
          "contactsPermission": "Allow $(PRODUCT_NAME) to access your contacts."
        }
      ]
    ]
  }
}
```

</details>

---

## Pregunta 6: Expo SMS

**¿Cuál es el flujo correcto para enviar un SMS usando `expo-sms`?**

```jsx
import * as SMS from 'expo-sms';

const handleSendSMS = async (phoneNumber, message) => {
    // ¿Cuál es el código correcto?
};
```

**Opciones:**

- a) `await SMS.sendSMSAsync(phoneNumber, message);`
- b) Primero verificar disponibilidad con `SMS.isAvailableAsync()`, luego enviar con `SMS.sendSMSAsync([phoneNumber], message)`
- c) `SMS.sendSMS({ to: phoneNumber, body: message });`
- d) No se necesita verificar disponibilidad, `sendSMSAsync` maneja internamente los errores

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) Primero verificar disponibilidad con `SMS.isAvailableAsync()`, luego enviar con `SMS.sendSMSAsync([phoneNumber], message)`**

**Explicación:**

`expo-sms` abre la aplicación de mensajes nativa con el mensaje pre-escrito. Es importante verificar primero si el dispositivo puede enviar SMS.

**Código correcto:**

```jsx
import * as SMS from 'expo-sms';

const handleSendSMS = async (phoneNumber, message) => {
    // 1. Verificar si SMS está disponible en el dispositivo
    const isAvailable = await SMS.isAvailableAsync();
    
    if (isAvailable) {
        // 2. Enviar SMS (abre la app de mensajes)
        const { result } = await SMS.sendSMSAsync(
            [phoneNumber],  // Array de números (puede ser múltiple)
            message         // Cuerpo del mensaje
        );
        
        // 3. Verificar el resultado
        console.log('Resultado:', result);
        // result puede ser: 'sent', 'cancelled', 'unknown'
    } else {
        Alert.alert('Error', 'No es posible enviar SMS desde este dispositivo');
    }
};
```

**API de expo-sms:**

| Método | Parámetros | Retorno |
|--------|------------|---------|
| `isAvailableAsync()` | Ninguno | `boolean` |
| `sendSMSAsync(addresses, message, options?)` | Array de números, mensaje | `{ result: string }` |

**Ejemplo real del código de apoyo:**

```jsx
const handleShareTicket = async (contact) => {
    const purchase = purchases.find(p => id == p.id);
    
    if (contact.phoneNumbers && contact.phoneNumbers.length > 0) {
        const isAvailable = await SMS.isAvailableAsync();
        
        if (isAvailable) {
            await SMS.sendSMSAsync(
                [contact.phoneNumbers[0].number],
                `¡Recuerda que nos vemos a las ${purchase.hour} para ver ${purchase.movie}!`
            );
        } else {
            Alert.alert('Error', 'No es posible enviar SMS desde este dispositivo');
        }
    }
};
```

**Nota importante:** `sendSMSAsync` no envía el SMS directamente, sino que abre la app de mensajes con el contenido pre-llenado. El usuario debe confirmar el envío.

</details>

---

## Pregunta 7: Expo Calendar

**Observa el siguiente código para crear un evento en el calendario. ¿Qué problema tiene?**

```jsx
import * as Calendar from 'expo-calendar';

const createEvent = async (movieTitle, showtime, cinema) => {
    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
    const defaultCalendar = calendars[0];
    
    const startDate = new Date();
    startDate.setHours(parseInt(showtime.split(':')[0]), parseInt(showtime.split(':')[1]));
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000);
    
    await Calendar.createEventAsync(defaultCalendar.id, {
        title: `Película: ${movieTitle}`,
        startDate,
        endDate,
        location: cinema,
    });
};
```

**Opciones:**

- a) El código es correcto y funcionará sin problemas
- b) Falta solicitar permisos de calendario antes de crear el evento
- c) `getCalendarsAsync` no existe, se debe usar `getCalendarAsync`
- d) No se puede acceder a `defaultCalendar.id` porque `calendars` es un objeto, no un array

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) Falta solicitar permisos de calendario antes de crear el evento**

**Explicación:**

Al igual que con los contactos, el acceso al calendario requiere permisos explícitos del usuario.

**Código corregido:**

```jsx
import * as Calendar from 'expo-calendar';
import { Alert } from 'react-native';

const createEvent = async (movieTitle, showtime, cinema) => {
    // 1. Solicitar permisos
    const { status } = await Calendar.requestCalendarPermissionsAsync();
    
    if (status === 'granted') {
        // 2. Obtener calendarios disponibles
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        
        // 3. Buscar el calendario primario o usar el primero disponible
        const defaultCalendar = calendars.find(cal => cal.isPrimary) || calendars[0];
        
        // 4. Configurar fechas
        const [hour, minute] = showtime.split(':').map(Number);
        const startDate = new Date();
        startDate.setHours(hour, minute, 0, 0);
        const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000);
        
        // 5. Crear el evento
        try {
            await Calendar.createEventAsync(defaultCalendar.id, {
                title: `Película: ${movieTitle}`,
                startDate,
                endDate,
                timeZone: 'GMT',
                location: cinema,
                notes: 'Evento creado desde UNIR Cinema'
            });
            
            Alert.alert('¡Listo!', 'Evento añadido al calendario');
        } catch (error) {
            Alert.alert('Error', 'No se pudo crear el evento');
        }
    } else {
        Alert.alert('Permisos', 'Se necesitan permisos para acceder al calendario');
    }
};
```

**Propiedades del evento:**

| Propiedad | Descripción |
|-----------|-------------|
| `title` | Título del evento |
| `startDate` | Fecha/hora de inicio |
| `endDate` | Fecha/hora de fin |
| `location` | Ubicación (string) |
| `notes` | Notas adicionales |
| `timeZone` | Zona horaria |
| `alarms` | Array de alarmas/recordatorios |

</details>

---

## Pregunta 8: Haptics (Retroalimentación Táctil)

**¿Cuál es la forma correcta de añadir retroalimentación háptica cuando el usuario presiona un botón en React Native con Expo?**

**Opciones:**

- a) 
```jsx
import { Vibration } from 'react-native';
<Pressable onPress={() => Vibration.vibrate()}>
```

- b)
```jsx
import * as Haptics from 'expo-haptics';
<Pressable onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}>
```

- c)
```jsx
import { TouchFeedback } from 'react-native';
<TouchFeedback onPress={handlePress} haptic={true}>
```

- d)
```jsx
import * as Haptics from 'expo-haptics';
<Pressable onPress={() => Haptics.vibrate(100)}>
```

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b)**
```jsx
import * as Haptics from 'expo-haptics';
<Pressable onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}>
```

**Explicación:**

`expo-haptics` proporciona una API moderna para retroalimentación háptica con diferentes tipos de feedback:

**Tipos de feedback háptico:**

| Método | Uso | Estilos disponibles |
|--------|-----|---------------------|
| `impactAsync(style)` | Impacto físico (tocar, soltar) | `Light`, `Medium`, `Heavy`, `Soft`, `Rigid` |
| `notificationAsync(type)` | Notificaciones | `Success`, `Warning`, `Error` |
| `selectionAsync()` | Selección de elementos | N/A |

**Ejemplos de uso:**

```jsx
import * as Haptics from 'expo-haptics';

// Feedback de impacto al presionar botón
const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    // ... resto de la lógica
};

// Feedback de éxito al completar acción
const handleSuccess = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
};

// Feedback de error
const handleError = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
};

// Feedback al cambiar selección (como un picker)
const handleSelection = () => {
    Haptics.selectionAsync();
};
```

**Implementación en un botón completo:**

```jsx
<Pressable
    className="p-3 rounded-md bg-blue-500 active:opacity-90"
    onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        handleConfirm();
    }}
    onLongPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        handleLongPress();
    }}
>
    <Text className="text-white text-center">Confirmar</Text>
</Pressable>
```

**Nota:** La opción A (`Vibration`) es la API antigua de React Native y no proporciona los diferentes tipos de feedback háptico sutil que ofrece `expo-haptics`.

</details>

---

## Pregunta 9: Generación de Código QR

**Observa el siguiente código que genera un código QR para una entrada de cine. ¿Cuál es la forma correcta de implementarlo?**

```jsx
import { View, Modal } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const TicketQR = ({ purchase }) => {
    const qrValue = `ticket-${purchase.id}-${purchase.movie}-${purchase.hour}`;
    
    return (
        <View className="items-center p-5">
            <QRCode 
                value={qrValue} 
                size={200}
            />
        </View>
    );
};
```

**¿Qué representa el prop `value` en el componente QRCode?**

**Opciones:**

- a) Es la URL de la imagen del código QR
- b) Es el dato que se codifica dentro del QR y que se obtendrá al escanearlo
- c) Es el ID único del componente QR para React
- d) Es el nombre del archivo donde se guardará el QR

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) Es el dato que se codifica dentro del QR y que se obtendrá al escanearlo**

**Explicación:**

El prop `value` contiene la información que se **codifica** dentro del código QR. Cuando alguien escanee el QR con una cámara o app de lectura, obtendrá exactamente ese valor.

**Props comunes de react-native-qrcode-svg:**

| Prop | Descripción | Valor por defecto |
|------|-------------|-------------------|
| `value` | Datos a codificar en el QR | (requerido) |
| `size` | Tamaño en píxeles | 100 |
| `color` | Color del QR | "black" |
| `backgroundColor` | Color de fondo | "white" |
| `logo` | Imagen para el centro del QR | undefined |
| `logoSize` | Tamaño del logo | 20% del size |

**Ejemplo completo del código de apoyo:**

```jsx
import { useState } from 'react';
import { View, Modal, Pressable, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const TicketModal = ({ purchase, visible, onClose }) => {
    // Generar valor único para el QR
    const qrValue = JSON.stringify({
        ticketId: purchase.id,
        movie: purchase.movie,
        cinema: purchase.cinema,
        hour: purchase.hour,
        seats: purchase.seats,
        timestamp: Date.now()
    });

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View className="flex-1 justify-center items-center bg-black/50">
                <View className="bg-white p-5 rounded items-center">
                    <Text className="text-lg font-bold mb-4">{purchase.movie}</Text>
                    <Text className="mb-4">{purchase.cinema} - {purchase.hour}</Text>
                    
                    <QRCode 
                        value={qrValue} 
                        size={200}
                        color="#0096c3"
                        backgroundColor="white"
                    />
                    
                    <Pressable onPress={onClose} className="mt-4 p-2">
                        <Text>Cerrar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};
```

**Tipos de datos comunes en QR:**

- **URLs:** `https://miapp.com/ticket/123`
- **JSON:** `{"id": 123, "type": "ticket"}`
- **Texto plano:** `TICKET-12345-SALA3`
- **vCard:** Información de contacto
- **WiFi:** Configuración de red

</details>

---

## Pregunta 10: OTA Updates y Expo EAS

**¿Qué es una OTA (Over-The-Air) Update en el contexto de Expo y cuándo se puede utilizar?**

**Opciones:**

- a) Es una actualización que requiere volver a publicar la app en las tiendas (App Store/Play Store) y que el usuario la descargue manualmente

- b) Es una actualización que permite enviar cambios de JavaScript y assets a los usuarios sin pasar por las tiendas, pero NO puede incluir cambios en código nativo

- c) Es una actualización que solo funciona en modo desarrollo y no se puede usar en producción

- d) Es una actualización que reemplaza completamente la aplicación instalada, incluyendo permisos y datos del usuario

<details>
<summary>🔍 Ver solución</summary>

**Respuesta correcta: b) Es una actualización que permite enviar cambios de JavaScript y assets a los usuarios sin pasar por las tiendas, pero NO puede incluir cambios en código nativo**

**Explicación:**

Las actualizaciones OTA (Over-The-Air) permiten actualizar el código JavaScript y los assets de tu aplicación **instantáneamente** sin necesidad de que el usuario descargue una nueva versión desde las tiendas.

**¿Qué se puede actualizar con OTA?**

| ✅ Se puede | ❌ No se puede |
|-------------|---------------|
| Código JavaScript/TypeScript | Código nativo (Swift, Kotlin, Java, Objective-C) |
| Componentes React | Nuevas dependencias nativas |
| Estilos y layouts | Cambios en `app.json` (nombre, icono, splash) |
| Imágenes y assets | Nuevos permisos |
| Lógica de negocio | Nuevos SDK nativos de Expo |
| Corrección de bugs JS | Cambios en la versión de Expo SDK |

**Comandos de Expo EAS Update:**

```bash
# Publicar una actualización OTA
eas update --branch production --message "Fix: corregido bug en carrito"

# Ver actualizaciones publicadas
eas update:list

# Publicar para un canal específico
eas update --channel preview
```

**Configuración en eas.json:**

```json
{
  "build": {
    "production": {
      "channel": "production"
    },
    "preview": {
      "channel": "preview",
      "distribution": "internal"
    }
  }
}
```

**Flujo de actualización:**

```
1. Desarrollador hace cambios en JS
2. Ejecuta `eas update`
3. Expo sube el nuevo bundle
4. Usuarios abren la app
5. App descarga la actualización en segundo plano
6. Próxima vez que abren: nueva versión
```

**¿Cuándo SÍ necesitas pasar por las tiendas?**

- Agregar nuevas librerías nativas
- Cambiar la versión de Expo SDK
- Modificar permisos de la app
- Cambiar el icono o nombre de la app
- Añadir nuevas capacidades nativas

</details>

