"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Send } from "lucide-react"

interface FormErrors {
  nombre?: string
  email?: string
  telefono?: string
  deporte?: string
  numEntradas?: string
  aceptaPrivacidad?: string
}

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    deporte: "",
    evento: "",
    numEntradas: "",
    mensaje: "",
    aceptaPrivacidad: false,
  })

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Validate nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio"
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = "El nombre debe tener al menos 2 caracteres"
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El formato del email no es válido"
    }

    // Validate telefono
    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es obligatorio"
    } else if (!/^[+]?[\d\s()-]{9,}$/.test(formData.telefono)) {
      newErrors.telefono = "El formato del teléfono no es válido"
    }

    // Validate deporte
    if (!formData.deporte) {
      newErrors.deporte = "Debes seleccionar un deporte"
    }

    // Validate numEntradas
    if (!formData.numEntradas) {
      newErrors.numEntradas = "El número de entradas es obligatorio"
    } else if (Number.parseInt(formData.numEntradas) < 1) {
      newErrors.numEntradas = "Debe ser al menos 1 entrada"
    } else if (Number.parseInt(formData.numEntradas) > 50) {
      newErrors.numEntradas = "Máximo 50 entradas por solicitud"
    }

    // Validate privacy policy
    if (!formData.aceptaPrivacidad) {
      newErrors.aceptaPrivacidad = "Debes aceptar la política de privacidad"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    console.log("[v0] Form submitted, validating...")

    if (!validateForm()) {
      console.log("[v0] Validation failed, showing error toast")
      toast({
        title: "Error en el formulario",
        description: "Por favor, corrige los errores antes de enviar.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    console.log("[v0] Form valid, simulating submission...")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("[v0] Submission complete, showing success toast")
    toast({
      title: "¡Solicitud enviada con éxito!",
      description: "Hemos recibido tu solicitud. Nos pondremos en contacto contigo en un plazo máximo de 24 horas.",
      duration: 8000,
    })

    // Reset form
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      deporte: "",
      evento: "",
      numEntradas: "",
      mensaje: "",
      aceptaPrivacidad: false,
    })
    setErrors({})

    setIsSubmitting(false)
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nombre">Nombre completo *</Label>
          <Input
            id="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={(e) => handleChange("nombre", e.target.value)}
            className={errors.nombre ? "border-destructive" : ""}
          />
          {errors.nombre && <p className="text-sm text-destructive">{errors.nombre}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="telefono">Teléfono *</Label>
          <Input
            id="telefono"
            type="tel"
            placeholder="+34 600 000 000"
            value={formData.telefono}
            onChange={(e) => handleChange("telefono", e.target.value)}
            className={errors.telefono ? "border-destructive" : ""}
          />
          {errors.telefono && <p className="text-sm text-destructive">{errors.telefono}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="deporte">Deporte *</Label>
          <Select value={formData.deporte} onValueChange={(value) => handleChange("deporte", value)}>
            <SelectTrigger id="deporte" className={errors.deporte ? "border-destructive" : ""}>
              <SelectValue placeholder="Selecciona un deporte" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="futbol">Fútbol</SelectItem>
              <SelectItem value="tenis">Tenis</SelectItem>
              <SelectItem value="baloncesto">Baloncesto</SelectItem>
              <SelectItem value="motociclismo">Motociclismo</SelectItem>
              <SelectItem value="formula1">Fórmula 1</SelectItem>
              <SelectItem value="balonmano">Balonmano</SelectItem>
              <SelectItem value="ciclismo">Ciclismo</SelectItem>
              <SelectItem value="voleibol">Voleibol</SelectItem>
              <SelectItem value="rugby">Rugby</SelectItem>
              <SelectItem value="otros">Otros</SelectItem>
            </SelectContent>
          </Select>
          {errors.deporte && <p className="text-sm text-destructive">{errors.deporte}</p>}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="evento">Evento o Competición</Label>
          <Input
            id="evento"
            placeholder="Ej: Viaje a La Liga"
            value={formData.evento}
            onChange={(e) => handleChange("evento", e.target.value)}
          />
          <p className="text-xs text-muted-foreground">Opcional: especifica la liga o torneo</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="numEntradas">Número de entradas *</Label>
          <Input
            id="numEntradas"
            type="number"
            min="1"
            max="50"
            placeholder="1"
            value={formData.numEntradas}
            onChange={(e) => handleChange("numEntradas", e.target.value)}
            className={errors.numEntradas ? "border-destructive" : ""}
          />
          {errors.numEntradas && <p className="text-sm text-destructive">{errors.numEntradas}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje">Mensaje adicional</Label>
        <Textarea
          id="mensaje"
          placeholder="Cuéntanos más detalles sobre tu solicitud..."
          rows={5}
          value={formData.mensaje}
          onChange={(e) => handleChange("mensaje", e.target.value)}
        />
        <p className="text-xs text-muted-foreground">
          Opcional: añade cualquier información adicional que consideres relevante
        </p>
      </div>

      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <Checkbox
            id="privacidad"
            checked={formData.aceptaPrivacidad}
            onCheckedChange={(checked) => handleChange("aceptaPrivacidad", checked as boolean)}
            className={errors.aceptaPrivacidad ? "border-destructive" : ""}
          />
          <Label htmlFor="privacidad" className="text-sm leading-relaxed text-muted-foreground">
            Acepto la{" "}
            <a href="/politica-privacidad" className="text-primary underline hover:no-underline">
              política de privacidad
            </a>{" "}
            y el tratamiento de mis datos personales *
          </Label>
        </div>
        {errors.aceptaPrivacidad && <p className="text-sm text-destructive">{errors.aceptaPrivacidad}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          "Enviando..."
        ) : (
          <>
            Enviar Solicitud
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-center text-sm text-muted-foreground">* Campos obligatorios</p>
    </form>
  )
}
